
// отключаем работу с устройствами по тач
// if(ScrollTrigger.isTouch !==1){

// планый скрол
ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".container",
    smooth: 3,
    effects: true,
})

// затухание названия
gsap.fromTo('.main-title', {opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.main-title',
        start: '-100',
        end: '150',
        scrub: true
    }
})
// анимация появления левой колонки
let itemsL = gsap.utils.toArray('.item-left .img-item')
itemsL.forEach(item=>{
    gsap.fromTo(item, {x: 60, opacity: 0},{
x: 0, opacity: 1, scrollTrigger: { 
    trigger: item, 
    start: '-1000',
    end: '-600',
    scrub: true
}
    })
})

// анимация  появления правой колонки
let itemsR = gsap.utils.toArray('.item-right .img-item')
itemsR.forEach(item=>{
    gsap.fromTo(item, {x: -60, opacity: 0},{
x: 0, opacity: 1, scrollTrigger: { 
    trigger: item, 
    start: '-900',
    end: '-500',
    scrub: true
}
    })
})

// затухание левой вверху
// itemsL = gsap.utils.toArray('.item-left .img-item')
// itemsL.forEach(item=>{
//     gsap.fromTo(item, {opacity: 1},{
// opacity: 0, scrollTrigger: { 
//     trigger: item, 
//     start: '0',
//     end: '500',
//     scrub: true
// }
//     })
// })

// затухание правой вверху
// itemsR = gsap.utils.toArray('.item-right .img-item')
// itemsR.forEach(item=>{
//     gsap.fromTo(item, {opacity: 1},{
// opacity: 0, scrollTrigger: { 
//     trigger: item, 
//     start: '0',
//     end: '500',
//     scrub: true
// }
//     })
// })
// }