// let totalIncome = document.getElementById("totalIncome").innerHTML
// let totalSpending = document.getElementById("totalspending").innerHTML


const addIncome = ()=> {
    let incomeValue = Number(prompt("Enter your monthly income:"))
    console.log(incomeValue);
    document.getElementById("totalIncome").innerHTML = "$" + Number(incomeValue)
}

const addSpending = ()=> {
// console.log(totalIncome, totalSpending);
// let spendingValue = Number(prompt("Enter how much your spending:"))
// console.log(spendingValue);
    if(5000<7000) {
        alert("No money")
    }else {
        alert("money Dey")
    }
}

