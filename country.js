import {countries} from './countries.js';
const names = countries.map(country => country.name);
console.log(names);
let countriesList = document.querySelector('.countries');
countriesList.style.display = 'grid';
countriesList.style.gridTemplateColumns = 'repeat(6, 1fr)';
countriesList.style.marginLeft = '70px';
countriesList.style.marginRigtht = '70px';
countriesList.style.marginTop = '100px';
let country;
for (const name of names){
    country = document.createElement('p');
    country.textContent = name;
    countriesList.appendChild(country);
    country.style.padding = '50px'
    country.style.border = '2px solid beige';
    country.style.textAlign = 'center';
    country.style.margin = '10px';
}
localStorage.setItem('names', names);