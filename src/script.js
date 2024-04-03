// let totalIncome = document.getElementById("totalIncome").innerHTML
// let totalSpending = document.getElementById("totalspending").innerHTML
let expense = []
totalIncome.innerHTML = 7000
// budgetBalance.innerHTML = 7000/2

const addIncome = ()=> {
    let incomeValue = Number(prompt("Enter your monthly income:"))
    console.log(incomeValue);
    document.getElementById("percentageIncome").innerHTML = ((Number(incomeValue) / totalIncome.innerHTML) * 100).toFixed(2) + "%"
    document.getElementById("totalIncome").innerHTML = Number(document.getElementById("totalIncome").innerHTML) + Number(incomeValue)

}

const addSpending = ()=> {
    let spendingValue = Number(prompt("Enter how much your spending:"))
    if(spendingValue<totalIncome.innerHTML) {
        console.log(spendingValue);
        document.getElementById("totalSpending").innerHTML = Number(document.getElementById("totalSpending").innerHTML) + Number(spendingValue)
        document.getElementById("budgetBalance").innerHTML = Number(spendingValue) + Number(document.getElementById("budgetBalance").innerHTML)
        document.getElementById("percentageSpending").innerHTML = ((totalSpending.innerHTML / totalIncome.innerHTML) * 100).toFixed(2) + "%"

        alert('Your expense has been added')
    }else {
        alert("No money")
    }
}

const addExpense = ()=> {
   let item = prompt("enter what you are buying")
   let description = prompt("what are you using it  for?")
   let amount = Number(prompt("How much are you spending?"))
    if (totalSpending.innerHTML <= 0 || item == "" || description == "" || amount == ""){
        alert("An error occured")
    }else {
        let details = {
            item, description, amount
        }
        budgetBalance.innerHTML  = budgetBalance.innerHTML - amount
        expense.push(details)
        display()
    }
    // console.log(expense);
}

const display = ()=>{
    output = ""
    expense.map((eachExpense, index)=>{
        // console.log(eachExpense);
            output +=     `
                            <div class="bg-slate-200 shadow-md p-3 rounded mb-2 w-full dark:text-gray-900">
                                    <p class="sentence">#${eachExpense.item}</p>
                                    <p class="sentence">${eachExpense.description}</p>
                                <div class="flex justify-between">
                                    <p class="text-lg font-semibold">$ ${eachExpense.amount}</p>
                                    <div class="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                        </svg>
                                        <span class="text-red-500">${((eachExpense.amount/totalSpending.innerHTML)*100).toFixed(2)}%</span>
                                    </div>
                                </div>
                            </div>
                         `
        // budgetBalance.innerHTML = Number(document.getElementById("budgetBalance").innerHTML) - eachExpense.amount 
        document.getElementById("output").innerHTML=output;
        console.log(eachExpense.amount, document.getElementById("budgetBalance").innerHTML);
    })
}

// const getBudget = (e)=>{
//  let   totalBudget = Number(document.getElementById("budgetBalance").innerHTML) - eachExpense.amount 
//  console.log(e);
//  return totalBudget
// }