const roles = ['Student', 'Developer', 'Programmer', 'Athlete'];
const role = document.querySelector('.roles');
index = 0;
setInterval(() => {
    role.textContent = roles[index];
    index++;
    if (index == 4){
        index = 0;
    }
}, 2000);

// create a function to generate rgb color
function genRgb(){
    let numbers = [];
    let number;
    for (let i = 0; i < 3; i++){
        number = Math.ceil(Math.random() * 255);
        numbers.push(number);
    }
    return `rgb(${numbers[0]}, ${numbers[1]}, ${numbers[2]})`;
}
const skills = ['Python','C#','JavaScript','HTML','CSS','MySQL'];
const skill = document.querySelector('.skills');
count = 0;
setInterval(() => {
    skill.textContent = skills[count];
    count++;
    if (count > skills.length){
        count = 0;
    }
    skill.style.color = genRgb();
}, 2000);

const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.backgroundColor = 'bisque';
    })
     section.addEventListener('mouseleave', () => {
        section.style.backgroundColor = 'white';
    })
})



