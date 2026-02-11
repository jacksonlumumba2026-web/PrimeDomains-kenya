document.getElementById("requestForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  let data = {
    domain: document.getElementById("domain").value,
    business: document.getElementById("business").value,
    email: document.getElementById("email").value,
    details: document.getElementById("details").value
  };
  // Save to admin dashboard
  let requests = JSON.parse(localStorage.getItem("requests")) || [];
  requests.push(data);
  localStorage.setItem("requests", JSON.stringify(requests));
  // WhatsApp notification
  let message = `Domain Request:%0ADomain: ${data.domain}%0ABusiness: ${data.business}%0AEmail: ${data.email}%0ADetails: ${data.details}`;
  window.open(`https://wa.me/254XXXXXXXXX?text=${message}`);
  // Email auto-response
  window.location.href = `mailto:${data.email}?subject=Domain Request Received&body=Hello, we received your request for ${data.domain}. Our broker team will contact you shortly.`;
});
