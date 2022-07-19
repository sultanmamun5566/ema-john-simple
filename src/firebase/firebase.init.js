import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthintecation = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthintecation;