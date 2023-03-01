const maincontainer = document.querySelector('.main')
const thankscontainer = document.querySelector('.main2')
const submit = document.getElementById('submit')
const rateagain = document.getElementById('rate-again')
const rating = document.getElementById('rating')
const rates= document.querySelectorAll('.btn')


submit.addEventListener('click',() =>{
    thankscontainer.classList.remove('hidden')
    maincontainer.style.display='none'
})

rateagain.addEventListener('click',() =>{
    thankscontainer.classList.add('hidden')
    maincontainer.style.display='block'
})

rates.forEach((rate) =>{
    rate.addEventListener('click',()=>{
        rating.innerHTML=rate.innerHTML
    })
})