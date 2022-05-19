const header = document.querySelector('#header');

/*Sticky header code starts*/
document.addEventListener('scroll', () => {
    if(this.scrollY >= 6 && !header.classList.contains('sticky')){
        header.classList.add('sticky');
    }
    else if(this.scrollY < 6 && header.classList.contains('sticky')){
        header.classList.remove('sticky');
    }
});
/*Sticky header code ends*/