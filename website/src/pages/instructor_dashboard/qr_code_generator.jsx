import React, { useRef, useState, useContext, useEffect } from "react";
import QRCode from "react-qr-code";
import { useWeb3Context } from "../../contexts/web3Context";
import { useGraphContext } from "../../contexts/graphContext"; // Import your GraphContext
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useSuccess } from "@/components/Success";

export default function QrCodeGenerator() {
  const triggerSuccess = useSuccess();
  const { createClassSession, createClass, userWallet } = useWeb3Context();
  const { queryClassesByTeacher } = useGraphContext(); // Use the queryClassesByTeacher function
  const [classes, setClasses] = useState([]); // State to store the fetched classes
  const [selectedClass, setSelectedClass] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [url, setUrl] = useState("");
  const qrCodeRef = useRef(null);

  // Fetch classes when the component mounts
  useEffect(() => {
    console.log(userWallet);
    async function fetchClasses() {
      const classes = await queryClassesByTeacher(userWallet);
      setClasses(classes);
    }

    fetchClasses();
  }, [userWallet]);

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSessionIdChange = (event) => {
    setSessionId(event.target.value);
  };

  const handleCreateSession = async () => {
    await createClassSession(selectedClass, sessionId, userWallet);
    const generatedUrl = generateURLWithSessionID(sessionId, userWallet);
    console.log(generatedUrl);
    setUrl(generatedUrl);
  };

  const generateURLWithSessionID = (sessionId, userWallet) => {
    const { hostname, port } = window.location;
    const base = (hostname === "localhost" && port) ? `localhost:${port}` : hostname;
    return `${window.location.protocol}//${base}/attend?sessionId=${sessionId}&userWallet=${userWallet}`;
    triggerSuccess();
  }

  return (
    <main className="w-full overflow-hidden">
      <div className="py-6">
        <div className="container mx-auto">
          <Navbar />
        </div>
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center my-4">
            Instructor Dashboard
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 text-center my-4">
            QR Code Generation
          </h2>
          <div className="container mx-auto mt-6 px-4">
            <div className="mb-4 max-w-sm">
              <label htmlFor="orgs" className="text-lg font-semibold">
                Classes:
              </label>
              <select
                value={selectedClass}
                onChange={handleClassChange}
                className="block mt-2 border border-gray-300 rounded p-2 w-full"
                name="orgs"
                id="orgs"
              >
                <option value="">Please select</option>
                {classes.map((classItem) => (
                  <option key={classItem.id} value={classItem.id}>
                    {classItem.name}
                  </option>
                ))}
              </select>
              <label htmlFor="sessionId">Enter Session ID:</label>
              <input
                type="text"
                id="sessionId"
                value={sessionId}
                onChange={handleSessionIdChange}
                className="block border border-gray-300 rounded p-2 w-full mt-2"
              />
              <button
                onClick={handleCreateSession}
                className="inline-flex rounded border-black border-2 px-2 py-3 items-center justify-center mt-2 mb-2 mr-2 font-bold bg-pink-200 text-black cursor-pointer decoration-none"
              >
                Create Session & Generate QR Code
              </button>
            </div>
            <div>
              {url && (
                <>
                  <p>
                    Generated URL:{" "}
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {url}
                    </a>
                  </p>
                  <QRCode value={url} size={200} ref={qrCodeRef} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-sm text-gray-600">
        <Footer />
      </div>
    </main>
  );
}
