// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: 'mern-blog-b327f.firebaseapp.com',
//   projectId: 'mern-blog-b327f',
//   storageBucket: 'mern-blog-b327f.appspot.com',
//   messagingSenderId: '699397991367',
//   appId: '1:699397991367:web:88ff565ef72a182d6b87e2',
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKUtfe_934jyN5qedRP3IxPj-YJPsxqW8",
  authDomain: "techblog-80fb7.firebaseapp.com",
  projectId: "techblog-80fb7",
  storageBucket: "techblog-80fb7.appspot.com",
  messagingSenderId: "889624674583",
  appId: "1:889624674583:web:abcba632cf109a1c753752"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);