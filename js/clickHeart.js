let clickHeart = document.querySelectorAll(".explore-item__click")

console.log(clickHeart)

for(let i = 0; i < clickHeart.length; i++) {
    let btn = clickHeart[i];
    btn.addEventListener('click', (e)=> {
        if(btn.classList.contains('active')) {
            btn.classList.remove('active')
            e.preventDefault();
        } else {
            btn.classList.add('active')
            e.preventDefault();
        }
    })
}