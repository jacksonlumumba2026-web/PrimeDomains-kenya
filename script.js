// DOMAINS LIST
const domains = [
    {name: "techhubkenya.com", price: 120, status: "Available", category:"Tech", badge:"Featured"},
    {name: "safemarketafrica.com", price: 90, status: "Sold", category:"E-commerce", badge:"New"},
    {name: "quickfixservices.com", price: 60, status: "Available", category:"Business", badge:"Featured"}
];

// Update hero & nav
document.getElementById("heroHeadline").textContent = config.heroHeadline;
document.getElementById("heroSubheadline").textContent = config.heroSubheadline;
document.getElementById("navTitle").textContent = config.siteTitle;
document.getElementById("siteTitle").textContent = config.siteTitle;

// Update colors
document.documentElement.style.setProperty('--primary-color', config.colors.primary);
document.documentElement.style.setProperty('--secondary-color', config.colors.secondary);
document.documentElement.style.setProperty('--accent-color', config.colors.accent);

// WhatsApp link
document.querySelector(".whatsapp").href = `https://wa.me/${config.whatsappNumber}`;

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
    window.open(`https://wa.me/${config.whatsappNumber}?text=${waMessage}`,'_blank');
}

// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();
