const bar = document.getElementById('bar')
const close= document.getElementById('close')
const nav = document.getElementById('navbar')
if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add("active");
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove("active")
    })
}

// const openbar = ()=>{
//     nav.classList.add('active')
// }

// bar.addEventListener('click',openbar)


// const closenav = ()=>{
//     nav.classList.remove('active')
// }
// close.addEventListener('click',closenav)
