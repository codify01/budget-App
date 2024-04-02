// let totalIncome = document.getElementById("totalIncome").innerHTML
// let totalSpending = document.getElementById("totalspending").innerHTML


const addIncome = ()=> {
    let incomeValue = Number(prompt("Enter your monthly income:"))
    console.log(incomeValue);
    document.getElementById("totalIncome").innerHTML = Number(incomeValue)
}

const addSpending = ()=> {
    let spendingValue = Number(prompt("Enter how much your spending:"))
    if(spendingValue<totalIncome.innerHTML) {
        console.log(spendingValue);
        document.getElementById("totalSpending").innerHTML = Number(spendingValue)
        alert("money Dey")
    }else {
        alert("No money")
    }
}

