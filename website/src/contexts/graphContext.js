import { createContext, useContext, useState } from "react";

const graphContext = createContext();

export const useGraphContext = () => {
    return useContext(graphContext);
};

export const GraphProvider = ({ children }) => {
    const SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/hudsonhrh/attedancetest';

    async function querySubgraph(query) {
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
    }

    async function queryClassAttendance(classSessionID) {
        const ATTENDANCE_QUERY = `
        {
            mintEvents(where: {classSession: "${classSessionID}"}) {
                recipient {
                    id
                }
            }
        }
        `;
    
        return querySubgraph(ATTENDANCE_QUERY);
    }

    async function checkClassSessionExists(classSessionID) {
        const SESSION_QUERY = `
        {
            sessions(where: {id: "${classSessionID}"}) {
                id
            }
        }
        `;
    
        const data = await querySubgraph(SESSION_QUERY);
    
        return data.sessions && data.sessions.length > 0;
    }

    async function queryAccountAdress(hashedTokenID) {
        const ACCOUNT_QUERY = `
        {
            users(where: {authId: "${hashedTokenID}"}) {
                id
                address
                balance
                timestamp
                authId
            }
        }
        `;

        const data = await querySubgraph(ACCOUNT_QUERY);

        return data.users && data.users.length > 0 ? data.users[0].id : false;
    }

    async function queryClassesByTeacher(teacherAddress) {
        if (!teacherAddress) {
            return false;
        }

        const CLASS_QUERY = `
        {
            classEntities(where: {teacher: "${teacherAddress}"}) {
                id
                name
            }
        }
        `;

        const data = await querySubgraph(CLASS_QUERY);

        return data.classEntities && data.classEntities.length > 0 ? data.classEntities : false;
    }

    async function queryAttendancePerClassForInstructor(teacherAddress) {
        const CLASS_QUERY = `
        {
            classEntities(where: {teacher: "${teacherAddress}"}) {
                id
                name
                sessions{
                    id
                    timestamp
                    attendanceCount
                }
            }
        }
        `;
        const data = await querySubgraph(CLASS_QUERY);
        
        // Process the data to format it as required
        let attendanceByClass = [];
        if (data.classEntities && data.classEntities.length > 0) {
            data.classEntities.forEach(classEntity => {
                const className = classEntity.name;
                const sessions = classEntity.sessions.map(session => {
                    const sessionDate = new Date(session.timestamp * 1000).toISOString().split('T')[0]; // converting timestamp to YYYY-MM-DD format
                    return {
                        sessionDate: sessionDate,
                        sessionAttendance: session.attendanceCount
                    };
                });
                attendanceByClass.push({
                    className: className,
                    sessions: sessions
                });
            });
        }
    
        return attendanceByClass;
    }
    
    

    async function queryAttendanceTrendsForInstructor(teacherAddress) {
        const TRENDS_QUERY = `
        {
            sessions(where: {teacher: "${teacherAddress}"}) {
                id
                timestamp
            }
        }
        `;
        
        const data = await querySubgraph(TRENDS_QUERY);
        console.log(data)

        if (data.sessions) {
            const trendsPromises = data.sessions.map(async (session) => {
                const attendanceData = await querySubgraph(`
                    {
                        mintEvents(where: {classSession: "${session.id}"}) {
                            id
                        }
                    }
                `);
                return {
                    date: new Date(session.timestamp * 1000),
                    attendance: attendanceData.mintEvents ? attendanceData.mintEvents.length : 0
                };
            });
            const unsortedTrends = await Promise.all(trendsPromises);
            return unsortedTrends.sort((a, b) => a.date - b.date);
        } else {
            return false;
        }
    }

    async function queryOverallStudentAttendanceForInstructor(teacherAddress) {
        const OVERALL_QUERY = `
        {
            classEntities(where: {teacher: "${teacherAddress}"}) {
                id
            }
        }
        `;

        const data = await querySubgraph(OVERALL_QUERY);

        if (data.classEntities) {
            let totalAttendees = 0;
            for (const cls of data.classEntities) {
                const attendanceData = await querySubgraph(`
                    {
                        mintEvents(where: {classSession: "${cls.id}"}) {
                            id
                        }
                    }
                `);
                totalAttendees += attendanceData.mintEvents ? attendanceData.mintEvents.length : 0;
            }
            return { totalAttendees };
        } else {
            return false;
        }
    }

    const value = {
        queryClassAttendance,
        checkClassSessionExists,
        queryAccountAdress,
        queryClassesByTeacher,
        queryAttendancePerClassForInstructor,
        queryAttendanceTrendsForInstructor,
        queryOverallStudentAttendanceForInstructor
    };
    
    return (
        <graphContext.Provider value={value}>
            {children}
        </graphContext.Provider>
    );
}
