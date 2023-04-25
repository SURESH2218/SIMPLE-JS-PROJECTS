const dogButton = document.getElementById('dogButton')

const newDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json=>{
            dogButton.innerHTML =  `<img src='${json.message}' height = 300 width = 300>`
        })


}

 dogButton.onclick =  () => newDog()

