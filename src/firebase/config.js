import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDhmcBIJK_TvW5SYv-hOwLvwUJUc6uHYtQ',
  authDomain: 'firegram-2d46e.firebaseapp.com',
  projectId: 'firegram-2d46e',
  storageBucket: 'firegram-2d46e.appspot.com',
  messagingSenderId: '905737802769',
  appId: '1:905737802769:web:4faf698006884806b28db0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
