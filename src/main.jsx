import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdxxjXPhlhalCYhLScQ1VRx8WI294dcT4",
  authDomain: "pc-store-7d44c.firebaseapp.com",
  projectId: "pc-store-7d44c",
  storageBucket: "pc-store-7d44c.appspot.com",
  messagingSenderId: "278895173266",
  appId: "1:278895173266:web:65fb9491dfd24d5ba3504b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
