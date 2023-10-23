import { NEXT_PUBLIC_GOOGLE_CLIENT_ID_ANDROID, NEXT_PUBLIC_GOOGLE_CLIENT_ID_IOS, NEXT_PUBLIC_GOOGLE_CLIENT_ID } from '@env';
import React from 'react';
import { Button } from 'react-native';
import { useIdTokenAuthRequest as useGoogleIdTokenAuthRequest } from 'expo-auth-session/providers/google';

export  function GoogleSignin() {
  const [, googleResponse, promptAsyncGoogle] = useGoogleIdTokenAuthRequest({
    selectAccount: true,
    expoClientId: NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    iosClientId: NEXT_PUBLIC_GOOGLE_CLIENT_ID_IOS,
    androidClientId: NEXT_PUBLIC_GOOGLE_CLIENT_ID_ANDROID,
  });

  const handleLoginGoogle = async () => {
    await promptAsyncGoogle();
  };

  return (
    <Button title={'Login'} onPress={handleLoginGoogle} />
  );
}
