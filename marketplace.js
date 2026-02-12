document.addEventListener('DOMContentLoaded', function() {
  const listingsDiv = document.getElementById('listings');
  // Fetch approved domain listings from Firestore
  db.collection("domains").where("status", "==", "approved").get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        var data = doc.data();
        var id = doc.id;
        // Create a card for each listing
        var card = document.createElement('div');
        card.className = 'listing';
        card.innerHTML = '<h3>' + data.domainName + '</h3>' +
                         '<p>' + data.description + '</p>' +
                         '<p>Price: $' + data.price + '</p>' +
                         '<button onclick="buyDomain(\'' + id + '\')">Buy Now</button>';
        listingsDiv.appendChild(card);
      });
    });
  // Placeholder buy function
  window.buyDomain = function(id) {
    alert('Initiate purchase process for listing: ' + id);
    // Here you would integrate PayPal or M-Pesa APIs
  };
});
