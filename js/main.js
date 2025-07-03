import { db, auth } from '../firebase.js';
import {
  collection, addDoc, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const productList = document.getElementById('productList');
const orderHistory = document.getElementById('orderHistory');

const products = [
  { name: "Es Teh", price: 3000 },
  { name: "Teajus", price: 1000 },
  { name: "Martel", price: "2000 - 10000" },
  { name: "Cilor", price: "2000 - 10000" },
  { name: "Mie Goreng", price: 6000 },
  { name: "Mie Kuah", price: 6000 },
];

products.forEach(prod => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <h3>${prod.name}</h3>
    <p>Rp ${prod.price}</p>
    <button onclick="order('${prod.name}')">Pesan</button>
  `;
  productList.appendChild(card);
});

window.order = async function(productName) {
  const user = auth.currentUser;
  await addDoc(collection(db, "orders"), {
    product: productName,
    timestamp: Date.now(),
    uid: user.uid
  });
  Swal.fire('Berhasil!', `Anda memesan ${productName}`, 'success');
};

window.loadOrderHistory = async () => {
  const res = await getDocs(collection(db, 'orders'));
  res.forEach(doc => {
    const data = doc.data();
    if (data.uid === auth.currentUser.uid) {
      const h = document.createElement('p');
      h.textContent = `${data.product} - ${new Date(data.timestamp).toLocaleString()}`;
      orderHistory.appendChild(h);
    }
  });
};

loadOrderHistory();

window.toggleNotif = () => {
  document.getElementById('notifPanel').classList.toggle('hidden');
};
