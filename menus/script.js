const humbergerIcon =  document.querySelector('.nav-toggler')

const navigation =  document.querySelector("nav")

humbergerIcon.addEventListener('click', toggleNav)

function toggleNav (){
    humbergerIcon.classList.toggle("active")
    navigation.classList.toggle("active")

    
}