const titles = document.querySelectorAll('h1');
const h1 = titles[0];
const num = titles[1];
num.style.color = 'forestgreen';
console.log(num)
document.body.addEventListener('keypress', e => {
    num.textContent = e.keyCode;
    let element = String.fromCharCode(e.keyCode);
    h1.textContent = `You pressed ${element}`;
})