import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
 apiKey: "AIzaSyCfIQIerkaIW1qJ-C1eHfT51q-iO1bnZ-8",
  authDomain: "luxury-watches-demo.firebaseapp.com",
  projectId: "luxury-watches-demo",
  storageBucket: "luxury-watches-demo.firebasestorage.app",
  messagingSenderId: "956758711965",
  appId: "1:956758711965:web:16b6f46a9eec7e76e2be74"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;