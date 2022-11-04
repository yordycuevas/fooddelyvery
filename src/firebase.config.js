
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCPeksVrIlMwRl6Ep8A-LZTplz8yNsMkqU",
  authDomain: "e-darkstore.firebaseapp.com",
  projectId: "e-darkstore",
  storageBucket: "e-darkstore.appspot.com",
  messagingSenderId: "225609930846",
  appId: "1:225609930846:web:5aa46e90969de0ccdbfccf",
  measurementId: "G-MMVLQEYZMY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app);

export default app;