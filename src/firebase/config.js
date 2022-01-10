import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDhmcBIJK_TvW5SYv-hOwLvwUJUc6uHYtQ',
  authDomain: 'firegram-2d46e.firebaseapp.com',
  projectId: 'firegram-2d46e',
  storageBucket: 'firegram-2d46e.appspot.com',
  messagingSenderId: '905737802769',
  appId: '1:905737802769:web:4faf698006884806b28db0',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timeStamp };
