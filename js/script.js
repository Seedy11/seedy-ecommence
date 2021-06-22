// this is the navigation bar
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
           nav.classList.toggle('show');
        });
    }
};

showMenu('nav-toggle','nav-menu');

const navlink = document.querySelectorAll('.nav_link');
function linkAction(){
    navlink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
   
    //remove menu 
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navlink.forEach(n => n.addEventListener('click', linkAction));
