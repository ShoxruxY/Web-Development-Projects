const earth = 'https://share.google/0OzO2Y9lBuAqPLnK1';
const venus = 'https://share.google/DbZUOHhDVuaxM2cdC';
const mercury = 'https://share.google/udumgKMNN5iutJy7S';
const mars = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWDeekPFxlkKLzEwhJ5afv3HmR2qU_FVakQ&s';
const yupiter = 'https://share.google/b8k45qi0NktF43xMA';
const saturn = 'https://share.google/JQnDAkef6yO0pO1b7';
const uranus = 'https://share.google/WbS1PAtnnlxziyQsy'
const neptune = 'https://share.google/v2rG2pAx6pzFQoXRf';
const planets = document.querySelector('.planets');
let image = document.querySelector('img');
console.log(image);
function clickMe(){
    let planet = planets.value;
    console.log(planet);
    let link;
    switch(planet){
        case "Mercury":
            link = mercury;
            break;
        case 'Venus':
            link = venus;
            break;
        case 'Earth':
            link = earth;
            break;
        case 'Mars':
            link = mars;
            breakl
        case 'Jupiter':
            link = yupiter;
            break;
        case 'Saturn':
            link = saturn;
            break;
        case 'Neptune':
            link = neptune;
            break;
        case 'Uranus':
            link = uranus;
            break;
    }
    image.src = link;
}