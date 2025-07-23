
import * as AuthSession from 'expo-auth-session';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type User = {
  picture: string;
  name: string;
  email: string;
};

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

export default function ProfileScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: ['profile', 'email'],
      redirectUri: AuthSession.makeRedirectUri(),
      responseType: 'token',
    },
    { authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth' }
  );

  async function getUserInfo(token: string) {
    const res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: 'Bearer ' + token },
    });
    const data = await res.json();
    setUser(data);
  }

  if (response && response.type === 'success' && response.params && response.params.access_token && !user) {
    getUserInfo(response.params.access_token);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {user ? (
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: user.picture }} style={{ width: 80, height: 80, borderRadius: 40 }} />
          <Text style={{ fontSize: 18, marginTop: 10 }}>{user.name}</Text>
          <Text style={{ color: '#888', marginBottom: 20 }}>{user.email}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={() => promptAsync()} style={{ backgroundColor: '#4285F4', padding: 12, borderRadius: 6 }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign in with Google</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
