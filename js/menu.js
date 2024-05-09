window.addEventListener('scroll', e=> {
   
    let activeMenu = 'fixMenu';
    // console.log(mMenu)
    // console.log(activeMenu)
    let wrapper = document.querySelector('.wrapper');
    let mMenu = document.querySelector('.main_menu');
    let container = document.querySelector('.container');
    let koef = scrollY-140;
    if(scrollY > 80) {
    // --------выводим блок с меню из блок плавного 
    // скролинга в ктором меню не фиксируется
    wrapper.before(mMenu);
    
    mMenu.classList.add(activeMenu)
    }

    else if(koef <= 10){
        // возвращаем меню на место
        container.prepend(mMenu);
        // удалаем класс фиксирующий меню
        mMenu.classList.remove(activeMenu);
        }
    })