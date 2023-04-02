import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBbTb-PM8RFNSlQ5KQUtYScbPjMPWpkHI",
    authDomain: "todo-d5595.firebaseapp.com",
    projectId: "todo-d5595",
    storageBucket: "todo-d5595.appspot.com",
    messagingSenderId: "759077181408",
    appId: "1:759077181408:web:3657c96b4a538a4ee87d85"
};

const connectFirebase = initializeApp(firebaseConfig);
const db = getFirestore(connectFirebase);
export default db;