import { db } from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const container = document.getElementById('marketplace-container');

async function loadDomains() {
    const querySnapshot = await getDocs(collection(db, "domains"));
    container.innerHTML = ''; // Clear loader

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        container.innerHTML += `
            <div class="domain-card">
                <h3>${data.name}</h3>
                <p class="category">${data.category}</p>
                <div class="price">$${data.price}</div>
                <button onclick="viewDomain('${doc.id}')" class="btn-primary">View Details</button>
            </div>
        `;
    });
}

window.onload = loadDomains;
