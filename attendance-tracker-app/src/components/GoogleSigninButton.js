import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { useGraphContext } from '../contexts/graphContextApp'; // Adjust the import path as needed
import { useWeb3Context } from '../contexts/web3ContextApp'; // Adjust the import path as needed

export default function GoogleSignInButton() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "75204647996-p8e44f84o1stmv4sk59dkpsgh3633k45.apps.googleusercontent.com",
    iosClientId: "75204647996-7416e25bb1ab6ug17qujdjbjjdvrb0ok.apps.googleusercontent.com",
    webClientId: "75204647996-cfnhvg4vlh0agq5llgeb36e3mv6lolbr.apps.googleusercontent.com",
  });

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [hashedUserId, setHashedUserId] = useState(null);

  const { queryAccountAdress } = useGraphContext();
  const { createWallet, setUserWallet } = useWeb3Context();

  const hashUserId = async (userId) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(userId);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  };

  useEffect(() => {
    const handleSignIn = async (authentication) => {
      console.log('GoogleSignInButton.onSignIn', { authentication });
      const token = authentication.accessToken;

      // Your logic to decode the JWT token and get user ID goes here
      const userId = "someUserId"; // Replace with actual user ID extraction logic
      const hashedId = await hashUserId(userId);
      setHashedUserId(hashedId);

      const check = await queryAccountAdress(hashedId);
      if (check === false) {
        await createWallet(hashedId, "teacher");
      } else {
        console.log("Wallet already exists");
        console.log(check);
        setUserWallet(check);
      }

      setIsSignedIn(true);
    };

    if (response?.type === 'success') {
      handleSignIn(response.authentication);
    }
  }, [response, queryAccountAdress, createWallet, setUserWallet]);

  return (
    <Button
      title={isSignedIn ? "Signed In!" : "Sign in with Google"}
      disabled={!request || isSignedIn}
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
