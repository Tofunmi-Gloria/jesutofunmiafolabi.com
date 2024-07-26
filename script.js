let menuicon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelector('section');
let navlinks = document.querySelectorAll('header nav');

window.onscroll = () => {
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset = sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id = sec.getatAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href ='+ id +']').classList.add('active')
            })
        }
    })
}