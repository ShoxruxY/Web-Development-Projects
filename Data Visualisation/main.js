import {countries} from './countries.js'
const names = countries.map(c => c.name);
const nations = document.querySelector('.countries');


// 3 important functions to make our website interactive
function countriesStartingWith(word){
    const filteredCountries = [];
    names.forEach(name => {
        if (name.toLowerCase().startsWith(word.toLowerCase())){
            filteredCountries.push(name);
        }
    })
    return filteredCountries;
}
function countriesContaining(word){
    const filteredCountries = [];
    names.forEach(name => {
        if (name.toLowerCase().includes(word.toLowerCase())){
            filteredCountries.push(name);
        }
    })
    return filteredCountries;
}
function reverseOrder(){
    displayNames(countriesForDisplay.reverse());
}

// Controlling HTML

const buttons = document.querySelectorAll('button');
// Filtering countries starting with a string
const startButton = buttons[0];
let isStartOn = false;

// Filtering countries including a string
const searchButton = buttons[1];
let isSearchOn = false;

// Reversing the order of the list on the window
const reverseButton = buttons[2];
let isReverseOn = false;

reverseButton.addEventListener('click', () => {
    if(reverseButton.textContent == 'A to Z'){
        reverseButton.textContent = 'Z to A';
        reverseButton.style.backgroundColor = 'rgb(123, 15, 223)';
        isReverseOn = true;
    } else {
        reverseButton.style.backgroundColor = 'rgb(151, 76, 220)';
        reverseButton.textContent = 'A to Z'
        isReverseOn = false;
    }
})
startButton.addEventListener('click', () => {
    if (!(isStartOn)){
        startButton.style.backgroundColor = 'rgb(123, 15, 223)';
        searchButton.disabled = true;
        isStartOn = true;
    } else {
        startButton.style.backgroundColor = 'rgb(151, 76, 220)'
        searchButton.disabled = false;
        isStartOn = false;
    }

})
searchButton.addEventListener('click', () => {
    if (controller){
        searchButton.style.backgroundColor = 'rgb(123, 15, 223)';
        controller = false;
        startButton.disabled = true;
        isSearchOn = true;
    } else {
        searchButton.style.backgroundColor = 'rgb(151, 76, 220)'
        controller = true;
        startButton.disabled = false;
        isSearchOn = false;
    }
})


const input = document.querySelector('input');
const hiddenText = document.querySelector('.hiddenText');
input.addEventListener('input' , () => {
    nations.innerHTML = '';
    if (isReverseOn) {
        if (isStartOn){
            displayNames(countriesStartingWith(input.value).reverse());
        } else {
            displayNames(countriesContaining(input.value).reverse());
        }
    } else {
        if (isStartOn){
            displayNames(countriesStartingWith(input.value));
        } else {
            displayNames(countriesContaining(input.value));
        }
    }
    if (input.value.trim() == ''){
        nations.innerHtml = '';
        displayNames(names);
    }
})
let h1;
function displayNames(arr){
    for (let name of arr){
        h1 = document.createElement('div');
        // Text Content
        h1.textContent = name;
        h1.className = 'country';

        // Style
        h1.style.padding = '80px 20px';
        h1.style.marginLeft = '20px';
        h1.style.marginTop = '20px';

        nations.appendChild(h1);
    }
}
// displayNames(names);

