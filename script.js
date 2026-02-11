// DOMAINS ARRAY
const domains = [
    {name: "techhubkenya.com", price: 120, status: "Available", category:"Tech", badge:"Featured"},
    {name: "safemarketafrica.com", price: 90, status: "Sold", category:"E-commerce", badge:"New"},
    {name: "quickfixservices.com", price: 60, status: "Available", category:"Business", badge:"Featured"},
    {name: "startupgenius.com", price: 150, status: "Available", category:"Brandable", badge:"New"},
    {name: "africawebtech.com", price: 100, status: "Sold", category:"Tech", badge:"Featured"}
    // Add more domains here
];

// SLIDER
const sliderTrack = document.getElementById("sliderTrack");
const featuredDomains = domains.filter(d => d.badge === "Featured");
featuredDomains.forEach(d=>{
    const statusClass = d.status==="Available"?"status-available":"status-sold";
    const soldOverlay = d.status==="Sold"?`<div class="sold-overlay">SOLD</div>`:"";
    let badgeHTML = d.badge==="New"?`<div class="badge badge-new">NEW</div>`:`<div class="badge badge-featured">FEATURED</div>`;
    sliderTrack.innerHTML += `<div class="slide">${soldOverlay}${badgeHTML}<h3>${d.name}</h3><p>Price: $${d.price}</p><p class="status ${statusClass}">${d.status}</p><button onclick="buyDomain('${d.name}','${d.status}')">Buy</button></div>`;
});
const slides = document.querySelectorAll(".slide");
let slideIndex=0;
function showSlideFade(index){ slides.forEach((s,i)=>{ s.classList.remove("active"); if(i===index) s.classList.add("active"); }); }
function nextSlide(){ slideIndex=(slideIndex+1)%slides.length; showSlideFade(slideIndex); }
function prevSlide(){ slideIndex=(slideIndex-1+slides.length)%slides.length; showSlideFade(slideIndex); }
setInterval(nextSlide,5000);
showSlideFade(slideIndex);

// DOMAIN GRID
const domainGrid = document.getElementById("domainGrid");
function displayDomains(list){
    domainGrid.innerHTML="";
    list.forEach(d=>{
        const statusClass = d.status==="Available"?"status-available":"status-sold";
        const soldOverlay = d.status==="Sold"?`<div class="sold-overlay">SOLD</div>`:"";
        let badgeHTML = d.badge==="New"?`<div class="badge badge-new">NEW</div>`:`<div class="badge badge-featured">FEATURED</div>`;
        domainGrid.innerHTML+=`<div class="domain-card">${soldOverlay}${badgeHTML}<h3>${d.name}</h3><p>Price: $${d.price}</p><p class="status ${statusClass}">${d.status}</p><button onclick="buyDomain('${d.name}','${d.status}')">Buy</button></div>`;
    });
}
displayDomains(domains);

// SEARCH & FILTER
document.getElementById("searchBtn").addEventListener("click",()=>{
    const keyword=document.getElementById("search").value.toLowerCase();
    const category=document.getElementById("categorySelect").value;
    const filtered=domains.filter(d=>d.name.toLowerCase().includes(keyword) && (category==="All"?true:d.category===category));
    displayDomains(filtered);
});

// BUY FUNCTION
function buyDomain(name,status){
    if(status==="Sold"){ alert("Sorry, this domain is sold."); return; }
    const waMessage=encodeURIComponent(`Hi, I want to buy the domain: ${name}`);
    window.open(`https://wa.me/254700000000?text=${waMessage}`,'_blank');
}

// AUTO UPDATE FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();
