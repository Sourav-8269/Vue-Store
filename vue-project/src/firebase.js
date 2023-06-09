import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,addDoc,getDoc,doc } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

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
const auth=getAuth(app);
const provider=new GoogleAuthProvider();



export {app,db,auth,provider,collection,getDocs,getStorage, ref, uploadBytesResumable, getDownloadURL,addDoc,getDoc,doc};