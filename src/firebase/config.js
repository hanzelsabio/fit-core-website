import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdp42TTr3zfrCWf9xAEoLuZTuAsrcwpEs",
  authDomain: "gymstore-bb28d.firebaseapp.com",
  projectId: "gymstore-bb28d",
  storageBucket: "gymstore-bb28d.firebasestorage.app",
  messagingSenderId: "201405613657",
  appId: "1:201405613657:web:573dc2aac9e4af2daf5348",
  measurementId: "G-L8X1GDK0ER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
