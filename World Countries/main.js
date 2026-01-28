import {countries} from './countries.js';

// Find top 9 the most populated countries
function findTopNine(){
    let sortedCountries = [...countries].sort((a,b) => b.population - a.population)
    let topTenCountries = sortedCountries.slice(0,9);
    let formattedCountries = topTenCountries.map(country => [country.name, country.population]);
    // Adding world's population to an array
    formattedCountries.unshift(calculateTotalPop());
    return formattedCountries;
}
// Calculating world's population
function calculateTotalPop(){
    let total = countries.reduce((acc, country) => acc += country.population,0);
    return ['World', total];
}

// Finding top 10 the most spoken languages
function findTopLanguages(){
    const topLanguages = {};
    for (const country of countries){
        for (let language of country.languages){
            topLanguages[language] = (topLanguages[language] || 0) + 1;
        }
    }
    let topTen = Object.entries(topLanguages).sort((a,b) => b[1] - a[1]).slice(0,10);
    return topTen;
}    

function makeFigure(max,current){
    return Math.round(current / max * 100);
}

// Making the webpage interactive
const p = document.querySelector('#text');
const pop = document.querySelector('#pop');
const lang = document.querySelector('#lang')
pop.addEventListener('click',() =>{
    p.textContent = '10 Most populated countries in the world'

    const names = document.querySelector('.names');
    const numbers = document.querySelector('.numbers');
    const figures = document.querySelector('.figures');

    names.innerHTML = '';
    numbers.innerHTML = '';
    figures.innerHTML = '';

    let para;
    
    for (const country of findTopNine()){
        para = document.createElement('p');
        para.textContent = country[0];
        names.appendChild(para);

        para = document.createElement('p');
        para.textContent = country[1];
        numbers.appendChild(para);

        para = document.createElement('p');
        para.textContent = makeFigure(calculateTotalPop()[1], country[1]).toFixed(0);
        figures.appendChild(para);
        para.style.backgroundColor = 'orange';
        para.style.color = 'orange';
        para.style.width = `${makeFigure(calculateTotalPop()[1], country[1]).toFixed(0) * 8}px`;

    }
})
lang.addEventListener('click', () => {
    p.textContent = '10 Most Spoken languages in the world';
    const names = document.querySelector('.names');
    const numbers = document.querySelector('.numbers');
    const figures = document.querySelector('.figures');

    names.innerHTML = '';
    numbers.innerHTML = '';
    figures.innerHTML = '';

    let para;
    for (const country of findTopLanguages()){
        para = document.createElement('p');
        para.textContent = country[0];
        names.appendChild(para);
        
        para = document.createElement('p');
        para.textContent = country[1];
        numbers.appendChild(para);

        para = document.createElement('p');
        para.textContent = makeFigure(100, country[1]);
        figures.appendChild(para);
        para.style.backgroundColor = 'orange';
        para.style.color = 'orange';
        para.style.width = `${Math.round(makeFigure(100, country[1])).toFixed(0) * 5}px`;
    }
});
