// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA77JQModAkI9j_6k0kPkN4cQTl5x2ghm0",
  authDomain: "siangwebps.firebaseapp.com",
  projectId: "siangwebps",
  storageBucket: "siangwebps.appspot.com",
  messagingSenderId: "299563910155",
  appId: "1:299563910155:web:3033d026cacf389a8a730e",
  measurementId: "G-BD28YJ1HDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;