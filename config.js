const firebaseConfig = {
  apiKey: "AIzaSyCsF6ZKlbh2d4gXwlXpWA05Jwjxk-Zh5iI",
  authDomain: "lista-de-compras-b8b4c.firebaseapp.com",
  projectId: "lista-de-compras-b8b4c",
  storageBucket: "lista-de-compras-b8b4c.appspot.com",
  messagingSenderId: "646219767875",
  appId: "1:646219767875:web:9fc1d0d0b24080f22774f6"
};
  
firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();