document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('seller-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var domain = document.getElementById('domain-name').value;
    var price = parseFloat(document.getElementById('domain-price').value);
    var desc = document.getElementById('domain-desc').value;
    var user = firebase.auth().currentUser;
    if (!user) {
      alert('You must be logged in to submit a listing.');
      window.location = 'login.html';
      return;
    }
    // Add new listing to Firestore with status 'pending'
    db.collection("domains").add({
      domainName: domain,
      price: price,
      description: desc,
      seller: user.email,
      status: 'pending',
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      document.getElementById('seller-message').innerText = 'Listing submitted for approval.';
      document.getElementById('seller-form').reset();
    }).catch((error) => {
      document.getElementById('seller-message').innerText = 'Error: ' + error.message;
    });
  });
});
