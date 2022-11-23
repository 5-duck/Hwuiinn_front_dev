// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
    apiKey: "AIzaSyC37uE_YCOBb4KzelLZG0KBeGiSKEY-fFg",
    authDomain: "keyword-56d3f.firebaseapp.com",
    projectId: "keyword-56d3f",
    storageBucket: "keyword-56d3f.appspot.com",
    messagingSenderId: "361147597483",
    appId: "1:361147597483:web:1afcbebc51c3cd12d62dee",
    measurementId: "G-J6JV75TTYM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
export const storageService = getStorage(app);