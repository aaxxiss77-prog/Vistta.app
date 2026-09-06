import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFunctions } from 'firebase/functions';

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const environmentNames: Record<string, string> = {
  apiKey: 'VITE_FIREBASE_API_KEY',
  authDomain: 'VITE_FIREBASE_AUTH_DOMAIN',
  databaseURL: 'VITE_FIREBASE_DATABASE_URL',
  projectId: 'VITE_FIREBASE_PROJECT_ID',
  storageBucket: 'VITE_FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'VITE_FIREBASE_MESSAGING_SENDER_ID',
  appId: 'VITE_FIREBASE_APP_ID'
};

export const missingFirebaseConfig = Object.entries(firebaseConfig)
  .filter(([name, value]) => name !== 'measurementId' && !value)
  .map(([name]) => environmentNames[name] || name);

export const firebaseConfigStatus = {
  valid: missingFirebaseConfig.length === 0,
  missing: missingFirebaseConfig
};

if (!firebaseConfigStatus.valid) {
  console.error('Configuração do Firebase incompleta.', { missing: missingFirebaseConfig });
}

export const app = firebaseConfigStatus.valid ? initializeApp(firebaseConfig) : null;
export const auth = (app ? getAuth(app) : null) as ReturnType<typeof getAuth>;
export const db = (app ? getDatabase(app) : null) as ReturnType<typeof getDatabase>;
export const functions = (app ? getFunctions(app) : null) as ReturnType<typeof getFunctions>;
