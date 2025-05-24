import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { auth } from '../../firebaseConfig';
import useThemeStyles from '../../hooks/useThemeStyles';

export default function UserDashboard() {
  const styles = useThemeStyles();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        if (currentUser.emailVerified) {
          setUser(currentUser);
        } else {
          Alert.alert(
            'Email Not Verified',
            'Please verify your email before accessing the dashboard.'
          );
          auth.signOut();
          router.replace('/auth/login');
        }
      } else {
        router.replace('/auth/login');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.replace('/auth/login');
    } catch (error: any) {
      Alert.alert('Logout Failed', error.message || 'An error occurred.');
    }
  };

  if (!user) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
          },
        ]}
      >
        {/* User Profile Card */}
        <View
          style={{
            backgroundColor: styles.card?.backgroundColor || '#fff',
            borderRadius: 16,
            padding: 24,
            width: '100%',
            maxWidth: 400,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 5,
            marginBottom: 30,
          }}
        >
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <Ionicons name="person-circle-outline" size={80} color="#4BB543" />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: styles.text.color,
                marginTop: 10,
              }}
            >
              {user.email}
            </Text>
            <Text style={{ fontSize: 14, color: '#888', marginTop: 4 }}>
              Email Verified ✔️
            </Text>
          </View>

          {/* Optional extra dashboard info */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16, color: styles.text.color, textAlign: 'center' }}>
              Welcome to your dashboard! 🎉
            </Text>
          </View>
        </View>

        {/* Logout Button */}
        <Pressable
          style={{
            backgroundColor: '#4BB543',
            paddingVertical: 14,
            paddingHorizontal: 24,
            borderRadius: 12,
            width: '100%',
            maxWidth: 300,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={20} color="white" />
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            Logout
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
