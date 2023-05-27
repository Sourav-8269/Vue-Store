import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,addDoc } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqn-sOD9qM138BevYgq0XS8KEgoKCdXWU",
    authDomain: "vuestore-91c09.firebaseapp.com",
    projectId: "vuestore-91c09",
    storageBucket: "vuestore-91c09.appspot.com",
    messagingSenderId: "384433477270",
    appId: "1:384433477270:web:ae7bb6c025f501769754b7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db,collection,getDocs,getStorage, ref, uploadBytesResumable, getDownloadURL,addDoc};