import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const generateURLWithClassID = (classId) => {
    
    return `localhost:3000/attend?classId=${classId}`;
}

function QRComponent() {
    const [classId, setClassId] = useState(''); 
    const [url, setUrl] = useState(''); 

    const handleClassIdChange = (event) => {
        setClassId(event.target.value);
    }

    const handleGenerateQR = () => {
        const generatedUrl = generateURLWithClassID(classId);
        console.log(generatedUrl);
        setUrl(generatedUrl);
    }

    return (
        <div>
            <div>
                <label htmlFor="classId">Enter Class ID: </label>
                <input
                    type="text"
                    id="classId"
                    value={classId}
                    onChange={handleClassIdChange}
                />
                <button onClick={handleGenerateQR}>Generate QR Code</button>
            </div>
            {url && (
                <>
                    <p>Generated URL: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
                    <QRCode value={url} />
                </>
            )}
        </div>
    );
}

export default QRComponent;
