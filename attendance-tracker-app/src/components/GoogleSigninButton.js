import React from 'react';
import { Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';

export default function GoogleSignInButton({ onSignIn }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "<your-android-client-id>",
    iosClientId: "<your-ios-client-id>",
    webClientId: "<your-web-client-id>",
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      if (authentication && onSignIn) {
        onSignIn(authentication);
      }
    }
  }, [response]);

  function onSignIn(authentication) {
    console.log('GoogleSignInButton.onSignIn', { authentication });
  }
    



  return (
    <Button
      title="Sign in with Google"
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
