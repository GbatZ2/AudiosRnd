
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAZJiOnzcuObYVnPorp1_lveHpkEfCbbV0",
    authDomain: "audio-2506d.firebaseapp.com",
    projectId: "audio-2506d",
    storageBucket: "audio-2506d.appspot.com",
    messagingSenderId: "841643577177",
    appId: "1:841643577177:web:d98da5dd4650b2e0c74648",
    measurementId: "G-KJFNB5C2VK"
};
  
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);