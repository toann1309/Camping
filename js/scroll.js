const arrowUp = document.querySelector('.op-top');

window.addEventListener('scroll', function(){
    if(window.scrollY > 1)
    {
        arrowUp.classList.add('activeUp')
    }
    else{
        arrowUp.classList.remove('activeUp')
    }
})