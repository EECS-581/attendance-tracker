import QRCode from 'qrcode.react';

const generateURLWithClassID = (classId) => {
    return `localhost:3000/attend?classId=${classId}`;
  }
  

  

function QRComponent() {
  const classId = "123456";
  const url = generateURLWithClassID(classId);
  console.log(url);

  return (
    <div>
      <QRCode value={url} />
    </div>
  );
}

export default QRComponent;
