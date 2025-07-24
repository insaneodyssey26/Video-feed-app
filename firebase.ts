import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChSs4OXgYirv5oEGkhH_OhLAUlguoK-Rw",
  authDomain: "video-feed-app-c6156.firebaseapp.com",
  projectId: "video-feed-app-c6156",
  storageBucket: "video-feed-app-c6156.firebasestorage.app",
  messagingSenderId: "495592493636",
  appId: "1:495592493636:web:a023f6819011ac0fd56211"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
