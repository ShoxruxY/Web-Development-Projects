const lines = document.querySelectorAll('div');
console.log(lines);
const firstLine = lines[1];
const secondLine = lines[2];
const thirdLine = lines[3]
let h1;  
let words = ['30 DAYS OF JAVASCRIPT', 'CHALLLENGE 2025', 'YUSUPOV SHOKHRUKHMIRZO'];

// Function to generate color
function genColor(){
    let numbers = [];
    for (let i = 0; i < 3; i++){
        let number = Math.ceil(Math.random() * 255);
        numbers.push(number);
    }
    return `rgb(${numbers[0]}, ${numbers[1]}, ${numbers[2]})`;
}
// Filling the window with the text
for (let letter of words[0]){
    h1 = document.createElement('h1');
    h1.textContent = letter;
    if(letter.trim().length == 0){
        h1.style.margin = '20px'
    }
    h1.style.color = genColor();
    firstLine.appendChild(h1);
} 

for (let letter of words[1]){
    h1 = document.createElement('h1');
    h1.textContent = letter;
    console.log(letter.trim().length == 0);
    if(letter.trim().length == 0){
        h1.style.margin = '20px'
    }
    h1.style.color = genColor();
    secondLine.appendChild(h1);
}
for (let letter of words[2]){
    h1 = document.createElement('h1');
    h1.textContent = letter;
    if(letter.trim().length == 0){
        h1.style.margin = '20px'
    }
    h1.style.color = genColor();
    thirdLine.appendChild(h1);
}
setInterval(() => {
    const hs = document.querySelectorAll('h1');
    for (let h of hs){
        h.style.color = genColor()
    }
    document.body.style.backgroundColor = genColor();
}, 1000);