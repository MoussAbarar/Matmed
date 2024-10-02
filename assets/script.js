let menu = document.querySelector('.bx-menu');
let close_menu = document.querySelector('.fa-regular');
let items = document.querySelector('.items');

menu.addEventListener('click', function(){
    items.classList.add('show');
    menu.classList.add('hide_menu');
    close_menu.classList.add('show_menu');
})

close_menu.addEventListener('click', function(){
    items.classList.remove('show');
    menu.classList.remove('hide_menu');
    close_menu.classList.remove('show_menu');
})

let navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.onscroll = function(){
    if(window.scrollY > lastScrollY){
        navbar.classList.add('hide_navbar');
    }else{
        navbar.classList.remove('hide_navbar');
    }

    lastScrollY = window.scrollY;
    
}

/* -------------- go up button ----------------*/

let up = document.querySelector('.up');

window.onscroll = function(){
    if(scrollY < 543){
        up.style.display = 'none';
    }else{
        up.style.display = 'block';
    }
}

up.onclick = function(){
    scroll({
        top: 0,
        behavior: 'smooth'
    })
}






  