import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAqBKBT3NNKrRgkEUuE6xvYUnpUUj3REDY",
  authDomain: "flixflex-11309.firebaseapp.com",
  projectId: "flixflex-11309",
  storageBucket: "flixflex-11309.appspot.com",
  messagingSenderId: "431884404153",
  appId: "1:431884404153:web:73886e6a278cc69166a268",
  measurementId: "G-RGBSL5XK9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);