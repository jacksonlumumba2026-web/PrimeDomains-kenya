auth.onAuthStateChanged(user=>{
  if(!user) window.location="login.html";

  // Load user's purchased domains
  db.collection("payments")
    .where("buyer","==",user.email)
    .onSnapshot(snapshot=>{
      let html="";
      snapshot.forEach(doc=>{
        let d = doc.data();
        html += `<p>${d.domain} — $${d.amount}</p>`;
      });
      document.getElementById("my-purchases").innerHTML = html;
    });

  // Load user's listed domains
  db.collection("domains")
    .where("seller","==",user.email)
    .onSnapshot(snapshot=>{
      let html="";
      snapshot.forEach(doc=>{
        let d = doc.data();
        html += `<p>${d.name} — Approved: ${d.approved}</p>`;
      });
      document.getElementById("my-domains").innerHTML = html;
    });
});
