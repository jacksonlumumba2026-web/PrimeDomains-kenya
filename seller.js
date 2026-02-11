import { db, auth } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const sellForm = document.getElementById('sell-domain-form');

sellForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const domainData = {
        name: sellForm['domain-name'].value,
        price: parseFloat(sellForm['price'].value),
        category: sellForm['category'].value,
        sellerId: auth.currentUser.uid,
        status: 'pending',
        createdAt: new Date()
    };

    try {
        await addDoc(collection(db, "domains"), domainData);
        alert("Domain listed successfully!");
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error("Error adding document: ", error);
    }
});

