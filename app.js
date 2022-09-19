//function Menu and blur screen
const openMenu = () => {
    document.querySelector('.blur-screen').className = 'blur-screen active';
    document.querySelector('aside').className = 'active';
}

const closeMenu = () => {
    document.querySelector('.blur-screen').className = 'blur-screen';
    document.querySelector('aside').className= '';
}

document.getElementById('menuBtn').onclick = (e) => {
    e.preventDefault();
    openMenu()

}

document.querySelector('aside button.close').onclick = (e) => {
    e.preventDefault();
    closeMenu()
}
