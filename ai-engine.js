export function generateBrandNames(keyword) {
    const prefixes = ['Prime', 'Neo', 'Cloud', 'Swift', 'Meta'];
    const suffixes = ['ly', 'io', 'hub', 'base', 'zone'];
    
    let suggestions = [];
    prefixes.forEach(pre => suggestions.push(`${pre}${keyword}.com`));
    suffixes.forEach(suf => suggestions.push(`${keyword}${suf}.com`));
    
    return suggestions;
}

// UI Interaction
const aiInput = document.getElementById('ai-input');
const aiBtn = document.getElementById('ai-btn');

if(aiBtn) {
    aiBtn.addEventListener('click', () => {
        const results = generateBrandNames(aiInput.value);
        document.getElementById('ai-results').innerHTML = results.map(name => `<li>${name}</li>`).join('');
    });
}

