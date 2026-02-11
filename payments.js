function buyDomain(id){
  db.collection("domains").doc(id).get().then(doc=>{
    let d = doc.data();
    let buyer = auth.currentUser.email;

    // Add to payments collection
    db.collection("payments").add({
      domain:d.name,
      amount:d.price,
      buyer:buyer,
      seller:d.seller,
      date:new Date()
    });

    // Optional: redirect to PayPal payment link
    window.location=`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=YOUR_PAYPAL&item_name=${d.name}&amount=${d.price}&currency_code=USD`;
  });
}
