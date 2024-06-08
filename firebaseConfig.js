import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "0AIzaSyD5MoOZfDxGFu_tE7dL2Ev2LXqlCkAMjGg0",
  authDomain: "desafio-back-end-6ac44.firebaseapp.com",
  projectId: "desafio-back-end-6ac44",
  storageBucket: "desafio-back-end-6ac44.appspot.com",
  messagingSenderId: "823753029124",
  appId: "1:823753029124:web:c8a9e77f2e42a46afe2751",
  measurementId: "G-3CYZS4CWMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

export { database };