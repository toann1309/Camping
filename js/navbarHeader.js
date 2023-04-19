let lineNav = document.querySelectorAll('.diagonal-line');

console.log(lineNav);

for (let i = 0; i < lineNav.length; i++) {
    let line = lineNav[i];
    line.addEventListener('click',(e)=> {
        e.preventDefault();
        if(line.classList.contains('active')) {
            line.classList.remove('active')
        } else {
            line.classList.add('active')
        }
    })
}