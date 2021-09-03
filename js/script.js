const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')
const main = document.querySelector('.main')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const slides = document.querySelectorAll('.slide')

let idx = 0
slideActive(slides[idx])

function slideActive(slider) {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })

    slider.classList.add('active')
}

next.addEventListener('click', () => {
    idx++
    if(idx > slides.length - 1){
        idx = 0
    }
    slideActive(slides[idx])

})

prev.addEventListener('click', () => {
    if(idx === 0) {
        idx = slides.length - 1
    }
    idx--
    slideActive(slides[idx])

})

hamburger.addEventListener('click', () => {
    main.classList.add('main-active')
})

close.addEventListener('click', () => {
    main.classList.remove('main-active')
})
