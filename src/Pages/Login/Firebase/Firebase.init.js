import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.conifg";
 

const initializeAuthentication = () => {
     initializeApp(firebaseConfig);
}

export default initializeAuthentication;