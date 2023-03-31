// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBbTb-PM8RFNSlQ5KQUtYScbPjMPWpkHI",
    authDomain: "todo-d5595.firebaseapp.com",
    projectId: "todo-d5595",
    storageBucket: "todo-d5595.appspot.com",
    messagingSenderId: "759077181408",
    appId: "1:759077181408:web:3657c96b4a538a4ee87d85"
};

// Initialize Firebase
const ConnectFirebase = initializeApp(firebaseConfig);

export default ConnectFirebase;