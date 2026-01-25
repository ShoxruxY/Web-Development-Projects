let title = document.createElement('h1');
title.textContent = 'Number Generator';
document.body.appendChild(title);
title.style.textAlign = 'center';
title.style.margin = '2px';
title.style.fontFamily = 'Courier';

title = document.createElement('p');
title.textContent = '30DaysOfJavaScript';
document.body.appendChild(title);
title.style.fontSize = '30px';
title.style.textAlign = 'center';
title.style.margin = '2px';
title.style.textDecoration = 'underline';
title.style.fontFamily = 'Courier';


title = document.createElement('p');
title.textContent = 'Author: Yusupov Shokhrukhmirzo';
document.body.appendChild(title);
title.style.margin = 0;
title.style.fontSize = '20px';
title.style.textAlign = 'center';
title.style.textDecoration = 'underline';
title.style.fontFamily = 'Courier';


const div = document.createElement('div');
div.style.display = 'grid';
div.style.gridTemplateColumns = 'repeat(6, 1fr)';
div.style.gap = '7px';
div.style.alignItems = 'center';
document.body.appendChild(div);
div.style.marginTop = '10px';
div.style.marginLeft = '150px';
div.style.marginRight = '150px';
let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,101];
for (let i = 0; i < 102; i++){
    
    let number = document.createElement('h1');
    number.textContent = i;
    div.appendChild(number);
    number.style.textAlign = 'center';
    number.style.color = 'white';
    if (primeNumbers.includes(i)){
        number.style.backgroundColor = 'red';
    } else if (i % 2 == 0) {
        number.style.backgroundColor = 'green';
    } else {
        number.style.backgroundColor = 'yellow';
    }
    number.style.paddingTop = '20px';
    number.style.paddingBottom = '20px';
    number.style.paddingLeft = '60px';
    number.style.paddingRight = '60px';
    number.style.margin = 0;
}