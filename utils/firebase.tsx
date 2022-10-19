import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC1JUIUC5uQSSaa7Bg0xv4ErUPgv0tgMc0',
  authDomain: 'kasim-airbnb-clone.firebaseapp.com',
  databaseURL: 'https://kasim-airbnb-clone-default-rtdb.firebaseio.com',
  projectId: 'kasim-airbnb-clone',
  storageBucket: 'kasim-airbnb-clone.appspot.com',
  messagingSenderId: '396887449115',
  appId: '1:396887449115:web:6f48f5b9c2b24f8a4962be',
  measurementId: 'G-BV5Q5LCWGG',
};
initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { storage };
export default db;
