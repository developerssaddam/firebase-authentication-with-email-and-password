import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOmht2U4FrVJPJfOSkzvkO_L4DUAgyChU",
  authDomain: "my-portfolio-2b045.firebaseapp.com",
  projectId: "my-portfolio-2b045",
  storageBucket: "my-portfolio-2b045.appspot.com",
  messagingSenderId: "827570267708",
  appId: "1:827570267708:web:896d2f69c4dc5643008539",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
