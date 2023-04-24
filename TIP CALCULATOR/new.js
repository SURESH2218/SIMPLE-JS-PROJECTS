const billinput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const noofpeople = document.getElementById('numberOfPeople')
const perperson = document.getElementById('perPersonTotal')

let numberofpeople= Number(noofpeople.innerText)

const calculateBill = () =>{
    const bill= Number(billinput.value)
    const tippercentage = Number(tipInput.value) /100
    const tipAmount = bill * tippercentage

    const total = tipAmount + bill
    const perPersonTotal = total /numberofpeople

    console.log(perPersonTotal);
    perperson.innerHTML =  `$${perPersonTotal.toLocaleString('en-us')}`
}


const increasePeople = () => {
    numberofpeople+=1
    noofpeople.innerHTML = numberofpeople
    calculateBill();
}

const decreasePeople = () =>{
    if(numberofpeople<=1){
        alert('Hey man you cannot go less than 1 calculate accordingly :)')
        return 
    }
    numberofpeople-=1
    noofpeople.innerHTML = numberofpeople
    calculateBill()
    
   
}