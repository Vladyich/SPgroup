

window.addEventListener('scroll', e=> {
    let mMenu = document.querySelector('.main_menu');
    let activeMenu = 'fixMenu';
    console.log(mMenu)
    // console.log(activeMenu)
if(scrollY > 100) mMenu.classList.add(activeMenu)
    else mMenu.classList.remove(activeMenu)
    })