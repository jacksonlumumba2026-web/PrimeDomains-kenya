function generateDomains(){

let keyword = document.getElementById("keyword").value;

let suggestions = [
keyword+"hub.com",
"get"+keyword+".com",
keyword+"kenya.com",
keyword+"online.com"
];

let html="";

suggestions.forEach(domain=>{

let price = estimatePrice(domain);

html += `
<div>
<h4>${domain}</h4>
<p>Estimated Price: $${price}</p>
<button onclick="buyDomain('${domain}',${price})">Buy</button>
</div>
`;

});

document.getElementById("suggestions").innerHTML = html;
}

function estimatePrice(domain){

let lengthScore = 12 - domain.length;
return 200 + (lengthScore * 20);
}
