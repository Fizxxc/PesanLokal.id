import { auth } from '../firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

window.login = () => {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, pass)
    .then(() => location.href = "/index.html")
    .catch(() => alert("Login Gagal"));
};

window.register = () => {
  const email = document.getElementById('regEmail').value;
  const pass = document.getElementById('regPassword').value;
  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => location.href = "/index.html")
    .catch(() => alert("Gagal Register"));
};
