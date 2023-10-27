import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { useGraphContext } from '../contexts/graphContextApp'; // Adjust the import path as needed
import { useWeb3Context } from '../contexts/web3ContextApp'; // Adjust the import path as needed
import 'fast-text-encoding'
import jwtDecode from 'jwt-decode';
import * as Crypto from 'expo-crypto';

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
    const hash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      userId
    );
    return hash;
  };

  useEffect(() => {
    const handleSignIn = async (authentication) => {
      console.log('GoogleSignInButton.onSignIn', { authentication });
      const idToken = authentication.idToken;
    
      // Decode the ID token to get the user's Google ID
      const decodedToken = jwtDecode(idToken);
      const googleId = decodedToken.sub; // 'sub' field contains the user's Google ID

      console.log("Google ID:", googleId);
    
      const hashedId = await hashUserId(googleId);
      console.log("Hashed User's Google ID:", hashedId)
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
