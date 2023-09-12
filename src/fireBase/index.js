
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA5_JJbXk9gZYJgUGUDCTwL5gfRvKsun2M",
  authDomain: "expense-app-yuraast.firebaseapp.com",
  projectId: "expense-app-yuraast",
  storageBucket: "expense-app-yuraast.appspot.com",
  messagingSenderId: "153237508183",
  appId: "1:153237508183:web:e6ebee6481836d20541312",
  measurementId: "G-LTDKDSHM9Z"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);