firebase.auth().onAuthStateChanged(function(user) {
  var listingsDiv = document.getElementById('pending-listings');
  if (user && user.email === 'admin@primedomains.com') {
    // Load pending listings
    db.collection("domains").where("status", "==", "pending").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        var data = doc.data();
        var id = doc.id;
        var div = document.createElement('div');
        div.innerHTML = '<h4>' + data.domainName + ' ($' + data.price + ')</h4>' +
                        '<p>' + data.description + '</p>' +
                        '<p>Seller: ' + data.seller + '</p>' +
                        '<button onclick="approveListing(\'' + id + '\')">Approve</button> ' +
                        '<button onclick="rejectListing(\'' + id + '\')">Reject</button>';
        listingsDiv.appendChild(div);
      });
    });
    // Approve listing
    window.approveListing = function(id) {
      db.collection("domains").doc(id).update({status: 'approved'});
      location.reload();
    };
    // Reject listing
    window.rejectListing = function(id) {
      db.collection("domains").doc(id).delete();
      location.reload();
    };
  } else {
    listingsDiv.innerText = 'Access denied. Admins only.';
  }
});
