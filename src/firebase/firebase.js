// acá colocas las credenciales de Firebase
// Importe las funciones que necesita de los SDK que necesita
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Configuración de Firebase de la aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyCGCwb_rwrlyaR6qCgKAtssWNsZ2jyB4xA",
  authDomain: "transporte-e438e.firebaseapp.com",
  projectId: "transporte-e438e",
  storageBucket: "transporte-e438e.appspot.com",
  messagingSenderId: "177110077966",
  appId: "1:177110077966:web:1d8c74d7e87f48e172225f"
  // apiKey: "AIzaSyCLfgYKgpzyJP1y6gtK32yMmI2dnkuTuMs",
  // authDomain: "reactsofkaferreteria.firebaseapp.com",
  // projectId: "reactsofkaferreteria",
  // storageBucket: "reactsofkaferreteria.appspot.com",
  // messagingSenderId: "99814436089",
  // appId: "1:99814436089:web:2b22a021345811fc1e4628"
};

// Inicializamos a Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);