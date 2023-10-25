import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useWeb3Context } from '../contexts/web3Context';

import GoogleSigninButton from '../components/GoogleSigninButton';


const generateURLWithSessionID = (sessionId) => {
    const { hostname, port } = window.location;
    const base = (hostname === "localhost" && port) ? `localhost:${port}` : hostname;
    return `${base}/attend?sessionId=${sessionId}`;
}

function QRComponent() {
    const {createClassSession, createClass} = useWeb3Context();
    const [classId, setClassId] = useState(''); 
    const [className, setClassName] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [url, setUrl] = useState(''); 


    const handleClassIdChange = (event) => {
        setClassId(event.target.value);
    }

    const handleClassNameChange = (event) => {
        setClassName(event.target.value);
    }

    const handleSessionIdChange = (event) => {
        setSessionId(event.target.value);
    }

    const handleCreateClass = async () => {
        await createClass(className, classId);
    }

    const handleCreateSession = async () => {
        await createClassSession(className, sessionId);
        const generatedUrl = generateURLWithSessionID(sessionId);
        console.log(generatedUrl);
        setUrl(generatedUrl);
    }

    return (
        <>
        
       
        <div>
        <GoogleSigninButton />
            <div>
                
                <label htmlFor="className">Enter Class Name: </label>
                <input
                    type="text"
                    id="className"
                    value={className}
                    onChange={handleClassNameChange}
                />
                <label htmlFor="classId">Enter Class ID: </label>
                <input
                    type="text"
                    id="classId"
                    value={classId}
                    onChange={handleClassIdChange}
                />
                <button onClick={handleCreateClass}>Create Class</button>

                <label htmlFor="sessionId">Enter Session ID: </label>
                <input
                    type="text"
                    id="sessionId"
                    value={sessionId}
                    onChange={handleSessionIdChange}
                />
                <button onClick={handleCreateSession}>Create Session & Generate QR Code</button>
            </div>
            {url && (
                <>
                    <p>Generated URL: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
                    <QRCode value={url} />
                </>
            )}
        </div>
        </>
    );
    
}

export default QRComponent;
