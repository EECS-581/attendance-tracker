import React, { createContext, useContext, useState } from 'react';

const GraphContext = createContext();

export const useGraphContext = () => useContext(GraphContext);

export const GraphProvider = ({ children }) => {
    const SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/hudsonhrh/attedancetest';

    const querySubgraph = async (query) => {
        try {
            const response = await fetch(SUBGRAPH_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });

            const data = await response.json();

            if (data.errors) {
                console.error('Error fetching data:', data.errors);
                return null;
            }

            return data.data;
        } catch (error) {
            console.error('Error querying subgraph:', error);
            return null;
        }
    };

    async function hasWalletAttendedSession(walletAddress, sessionId) {

        console.log(sessionId)
        console.log(walletAddress)
        
        const ATTENDANCE_QUERY = `
        {
            mintEvents(
              where: {
                recipient_: { address: "${walletAddress}" },
                classSession_: { id: "${sessionId}" }
              }
            ) {
              id
            }
        }
        `;
    
        // Use the generic querySubgraph function to fetch the data
        const data = await querySubgraph(ATTENDANCE_QUERY);
    
        // Check if any mint events were returned for the user and session
        if (data && data.mintEvents && data.mintEvents.length > 0) {
            return true;
        } else {
            return false;
        }
    }
    
    


    

    async function checkClassSessionExists(classSessionID) {
        // Define the GraphQL query for class attendance using template literals
        const ATTENDANCE_QUERY = `
        {
            sessions(where: {sessionId: "${classSessionID}"}) {
              sessionId
            }
        }
        `;
    
        // Use the generic querySubgraph function to fetch the data
        const data = await querySubgraph(ATTENDANCE_QUERY);

        console.log(data)

        if (data.sessions.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    async function queryAccountAdress(hashedTokenID){
        const string = hashedTokenID.toString();
        const ACCOUNT_QUERY = `
        {
            users(where: {authId: "${string}"}) {
              id
              address
              balance
              timestamp
              authId
            }
          }
        `;

        const data = await querySubgraph(ACCOUNT_QUERY);

        console.log(data)

        if (data.users.length > 0) {
             return data.users[0].id;
         }
         else {
             return false;
         }
    }

    async function queryClassesByTeacher(teacherAddress) {
        const query = `
            query {
                classEntities(where: {teacher: "${teacherAddress}"}) {
                    id
                    name
                    classId
                    timestamp
                    sessions {
                        id
                        sessionId
                        timestamp
                        attendanceCount
                    }
                }
            }
        `;
        return querySubgraph(query);
    }

    async function queryAttendancePerClassForInstructor(teacherAddress) {
        // find teachers classes 
        const classes = await queryClassesByTeacher(teacherAddress);
        console.log("classes",classes)


    }
    
    




    const value = {
        checkClassSessionExists,
        queryAccountAdress,
        queryClassesByTeacher,
        hasWalletAttendedSession,
        queryAttendancePerClassForInstructor
    };

    return (
        <GraphContext.Provider value={value}>
            {children}
        </GraphContext.Provider>
    );

}