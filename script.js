// let totalIncome = document.getElementById("totalIncome").innerHTML
// let totalSpending = document.getElementById("totalspending").innerHTML


const addIncome = ()=> {
    let incomeValue = Number(prompt("Enter your monthly income:"))
    console.log(incomeValue);
    document.getElementById("totalIncome").innerHTML = "$" + incomeValue
}

const addSpending = ()=> {
console.log(totalIncome, totalSpending);
let incomeValue = Number(prompt("Enter how much your spending:"))
    if (document.getElementById("totalIncome").innerHTML  != ""){
        alert("you are good to go")
        console.log(incomeValue);
        document.getElementById("totalSpending").innerHTML = "$" + incomeValue
    } else{
        alert( "You don't have enough money!")
    }

}

