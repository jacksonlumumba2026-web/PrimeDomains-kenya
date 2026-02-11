let requests=JSON.parse(localStorage.getItem("requests"))||[];
let container=document.getElementById("requestList");
requests.forEach(r=>{
  let card=document.createElement("div");
  card.className="domain-card";
  card.innerHTML=`<h3>${r.domain}</h3><p>${r.business}</p><p>${r.email}</p><p>${r.details}</p>`;
  container.appendChild(card);
});
