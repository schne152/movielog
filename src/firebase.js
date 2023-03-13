import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCt8UvwaP1mSNdAmPqp0QjV8X70MrufVhs",
    authDomain: "movielog-e9415.firebaseapp.com",
    projectId: "movielog-e9415",
    storageBucket: "movielog-e9415.appspot.com",
    messagingSenderId: "989455381448",
    appId: "1:989455381448:web:5af7fb9eb53e90cf3a86fd",
    measurementId: "G-NM3FKJLNVR"
  }

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app