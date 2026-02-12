document.addEventListener('DOMContentLoaded', function() {
  const auctionsDiv = document.getElementById('auctions-list');
  // Fetch auctions from Firestore
  db.collection("auctions").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      var data = doc.data();
      var id = doc.id;
      var div = document.createElement('div');
      var currentBid = data.highestBid || data.startPrice;
      div.innerHTML = '<h4>' + data.domainName + '</h4>' +
                      '<p>Highest Bid: $' + currentBid + '</p>' +
                      '<input type="number" id="bid-' + id + '" placeholder="Your bid">' +
                      '<button onclick="placeBid(\'' + id + '\', ' + data.startPrice + ')">Place Bid</button>';
      auctionsDiv.appendChild(div);
    });
  });
  // Place bid function
  window.placeBid = function(id, startPrice) {
    var bidInput = document.getElementById('bid-' + id);
    var bidValue = parseFloat(bidInput.value);
    if (!bidValue) { alert('Enter a valid bid.'); return; }
    var docRef = db.collection("auctions").doc(id);
    docRef.get().then((doc) => {
      var current = doc.data().highestBid || doc.data().startPrice;
      if (bidValue > current) {
        docRef.update({
          highestBid: bidValue,
          highestBidder: firebase.auth().currentUser ? firebase.auth().currentUser.email : "guest"
        });
        alert('Bid placed successfully.');
        window.location.reload();
      } else {
        alert('Your bid must be higher than the current highest bid.');
      }
    });
  };
});
