import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'your-app.firebaseapp.com',
  projectId: 'your-app-id',
  storageBucket: 'your-app.appspot.com',
  messagingSenderId: 'SENDER_ID',
  appId: 'APP_ID',
   databaseURL: "your database URL (region)",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with React Native persistence using AsyncStorage
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// Get Realtime Database instance
export const db = getDatabase(app);

