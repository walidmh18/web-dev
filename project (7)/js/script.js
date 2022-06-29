const navOpen = document.getElementById('navOpen')
const navClose = document.getElementById('navClose')
const navList = document.getElementsByClassName('navMenuContainer')[0]
const navMenuContainerContaier = document.getElementsByClassName('navMenuContainerContaier')[0]
// console.log(navMenuContainerContaier);
const body = document.querySelector('body')
let navCondition = 'close' 

function navOpening() {
    if (navCondition == 'close') {
        navList.style.bottom = 0;
        navList.style.transition = '0.3s';
        navMenuContainerContaier.style.left = 0
        navCondition = 'open';
    } else {
        navList.style.bottom = '-80vh';
        navList.style.transition = '0.3s';
        navMenuContainerContaier.style.left = '-100%'
        navCondition = 'close';
    }
}
function navclosing() {
    navList.style.bottom = '-80vh';
    navList.style.transition = '0.3s';
    navCondition = 'close';
}

function navClosing() {
    if (screen.width <= 425) {
    navclosing()
}
}



