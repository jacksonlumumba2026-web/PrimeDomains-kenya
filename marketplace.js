db.collection("domains").where("approved","==",true)
.onSnapshot(snapshot=>{
  let html="";
  snapshot.forEach(doc=>{
    let d = doc.data();
    html += `
      <div>
        <h3>${d.name}</h3>
        <p>Price: $${d.price}</p>
        <p>Seller: ${d.seller}</p>
        <button onclick="buyDomain('${doc.id}')">Buy</button>
      </div>
    `;
  });
  document.getElementById("market").innerHTML = html;
});
