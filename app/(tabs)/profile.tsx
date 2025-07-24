
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../../firebase';

export default function ProfileScreen() {
  const [user, setUser] = useState<any>(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '495592493636-vt3rbt4kr6n886io1vevggmb1a77u3cu.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {user ? (
        <View style={{ alignItems: 'center' }}>
          {user.photoURL && (
            <Image source={{ uri: user.photoURL }} style={{ width: 80, height: 80, borderRadius: 40 }} />
          )}
          <Text style={{ fontSize: 18, marginTop: 10 }}>{user.displayName}</Text>
          <Text style={{ color: '#888', marginBottom: 20 }}>{user.email}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={() => promptAsync()} style={{ backgroundColor: '#4285F4', padding: 12, borderRadius: 6 }} disabled={!request}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign in with Google</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
