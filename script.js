const carouselContainer = document.getElementById("carouselContainer");
let featuredDomains = [];

// Carousel
function showCarousel(){
  carouselContainer.innerHTML="";
  featuredDomains.forEach(d=>{
    let div=document.createElement("div");
    div.className="domain-card";
    div.innerHTML=`<h3>${d.name}</h3><p>${d.category||"Premium"} Domain</p><span>$${d.price}</span>
                   <button onclick="buyDomain('${d.name}',${d.price})" class="btn">Buy Now</button>`;
    carouselContainer.appendChild(div);
  });
}
let scrollPosition=0;
function moveCarousel(direction){
  scrollPosition+=direction*270;
  if(scrollPosition<0) scrollPosition=0;
  if(scrollPosition>carouselContainer.scrollWidth-carouselContainer.clientWidth)
      scrollPosition=carouselContainer.scrollWidth-carouselContainer.clientWidth;
  carouselContainer.scrollLeft=scrollPosition;
}

// Homepage keyword generator
function generateAndSendDomains(){
  let keyword=document.getElementById("keyword").value.trim();
  if(!keyword) return alert("Enter a keyword!");
  featuredDomains=[
    {name:keyword+"Hub.com",category:"Startup",price:500},
    {name:"Go"+keyword+".com",category:"Tech",price:600},
    {name:keyword+"Labs.com",category:"Innovation",price:700},
    {name:keyword+"Works.com",category:"Business",price:650},
    {name:keyword+"ly.com",category:"Branding",price:550}
  ];
  localStorage.setItem("featuredDomains",JSON.stringify(featuredDomains));
  showCarousel();
}

// Request page generator
function generateNames(){
  let keyword=document.getElementById("keyword").value.trim();
  if(!keyword) return alert("Enter a keyword!");
  let suggestions=[keyword+"Hub",keyword+"Nest",keyword+"Forge","Go"+keyword,keyword+"ly",keyword+"Labs",keyword+"Works"];
  document.getElementById("suggestions").innerHTML="Suggestions: "+suggestions.join(", ");
  document.getElementById("domain").value=suggestions[0]+".com";
  featuredDomains=suggestions.map((name,index)=>({name:name+".com",price:500+index*100}));
  showCarousel();
}

// Buy domain
function buyDomain(domainName,price){
  localStorage.setItem("selectedDomain",domainName);
  window.open("request.html","_blank");
  let paypalLink=`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=YOUR_PAYPAL_EMAIL&item_name=${domainName}&amount=${price}&currency_code=USD`;
  window.open(paypalLink,"_blank");
  setTimeout(()=>{
    let email=prompt("Enter email for confirmation of "+domainName+":");
    let message=`Domain Purchased:%0ADomain: ${domainName}%0APrice: $${price}`;
    window.open(`https://wa.me/254XXXXXXXXX?text=${message}`);
    if(email) window.location.href=`mailto:${email}?subject=Domain Purchase Confirmation&body=Thank you for purchasing ${domainName} for $${price}. Our team will contact you shortly.`;
  },5000);
}

// Packages buy
function buyPackage(packageName,price){
  let paypalLink=`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=YOUR_PAYPAL_EMAIL&item_name=${packageName}&amount=${price}&currency_code=USD`;
  window.open(paypalLink,"_blank");
  setTimeout(()=>{
    let email=prompt("Enter email for confirmation of "+packageName+":");
    let message=`Package Purchased:%0A${packageName}%0APrice: $${price}`;
    window.open(`https://wa.me/254XXXXXXXXX?text=${message}`);
    if(email) window.location.href=`mailto:${email}?subject=Package Purchase Confirmation&body=Thank you for purchasing ${packageName} for $${price}. Our team will contact you shortly.`;
  },5000);
}

// Request form submission
document.getElementById("requestForm")?.addEventListener("submit",function(e){
  e.preventDefault();
  let data={domain:document.getElementById("domain").value,
            business:document.getElementById("business").value,
            email:document.getElementById("email").value,
            details:document.getElementById("details").value};
  let requests=JSON.parse(localStorage.getItem("requests"))||[];
  requests.push(data);
  localStorage.setItem("requests",JSON.stringify(requests));
  alert("Domain request submitted successfully!");
});
