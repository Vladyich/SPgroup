window.addEventListener('scroll', e=> {
   
    let activeMenu = 'fixMenu';
    // console.log(mMenu)
    // console.log(activeMenu)
    let wrapper = document.querySelector('.wrapper');
    let mMenu = document.querySelector('.main_menu');
    let container = document.querySelector('.container');
    if(scrollY > 150) {
    // --------выводим блок с меню из блок плавного 
    // скролинга в ктором меню не фиксируется
    wrapper.before(mMenu);
    // -----конец блока---------------------------
    mMenu.classList.add(activeMenu)
    }

    else {
        container.prepend(mMenu);
        mMenu.classList.remove(activeMenu);
        }
    })