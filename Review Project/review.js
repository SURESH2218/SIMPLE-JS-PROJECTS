const reviews=[{

    id:1,
    Name:"babu",
    job:"web developer",
    text:"lorem4ng gggkjnjknkjngn"
    
},
{

    id:2,
    Name:"gopi",
    job:"web developer",
    text:"lorem4ng gggkjnjknkjngn"
    
},
{

    id:3,
    Name:"jayanth",
    job:"web developer",
    text:"lorem4ng gggkjnjknkjngn"
    
},
{

    id:4,
    Name:"sai nadh",
    job:"web developer",
    text:"lorem4ng gggkjnjknkjngn"
    
},
{

    id:5,
    Name:"rohit",
    job:"web developer",
    text:"lorem4ng gggkjnjknkjngn"
    
},];

//selecting itemms

const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevbtn=document.querySelector('.prev-btn')
const nextbtn=document.querySelector('.next-btn')
const randombtn=document.querySelector('.random-btn')

let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){
    showperson(currentItem)
})

function showperson(){
    const item= reviews[currentItem]
    author.textContent=item.Name;
    job.textContent= item.job;
    info.textContent=item.text;
}

nextbtn.addEventListener("click",function(){
    currentItem++;
    if (currentItem>reviews.length-1){
        currentItem=0;
    }
    showperson();

})
prevbtn.addEventListener("click",function(){
    currentItem--;
    if (currentItem<0){
        currentItem=reviews.length-1;
    }
    showperson();
})

randombtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    showperson();
})