import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAZBoMSSMKMz05dCtimm5ARK0ZKEVUKIQ",
  authDomain: "://firebaseapp.com",
  projectId: "ulug-bek-9d08b",
  storageBucket: "ulug-bek-9d08b.firebasestorage.app",
  messagingSenderId: "58552796900",
  appId: "1:58552796900:web:f2327cae0a3fe69ad30ef1",
  measurementId: "G-P3315CBBWF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
