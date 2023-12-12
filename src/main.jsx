import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdxxjXPhlhalCYhLScQ1VRx8WI294dcT4",
  authDomain: "pc-store-7d44c.firebaseapp.com",
  projectId: "pc-store-7d44c",
  storageBucket: "pc-store-7d44c.appspot.com",
  messagingSenderId: "278895173266",
  appId: "1:278895173266:web:65fb9491dfd24d5ba3504b"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
