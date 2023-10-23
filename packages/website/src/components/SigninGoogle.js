import { useState } from 'react';

function GoogleSignInButton() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  const onSuccess = (response) => {
    const tokenId = response.getAuthResponse().id_token;
    // Send `tokenId` to The Graph or use it to check user's identity.
    setIsSignedIn(true);
  };

  const onFailure = (error) => {
    console.error("Google Sign-In Error:", error);
  };

  return (
    <div>
      {!isSignedIn ? (
        <div className="g-signin2" data-onsuccess="onSuccess" data-onfailure="onFailure"></div>
      ) : (
        <p>User signed in!</p>
      )}
    </div>
  );
}

export default GoogleSignInButton;
