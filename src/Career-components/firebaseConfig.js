import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAK8PxMEOuf2sZBOze3z_qVnr_iiW2KTr0",
    authDomain: "imageuploaddata.firebaseapp.com",
    projectId: "imageuploaddata",
    storageBucket: "imageuploaddata.appspot.com",
    messagingSenderId: "759020932965",
    appId: "1:759020932965:web:5fe67d59687055b3669b8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imgDb = getStorage(app);
export const pdfDb = getStorage(app);