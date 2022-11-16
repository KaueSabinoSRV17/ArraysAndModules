const expensesAndIncome = {
    expenses: [50, 166, 500, 1000, 250],
    income: [1800, 900, 2500]
}

const { expenses, income } = expensesAndIncome

const totalExpenses = expenses.reduce((sumOfExpenses, currentExpense) => {
    return sumOfExpenses + currentExpense
}, 0)

const totalIncome = income.reduce((sumOfIncome, currentIncome) => {
    return sumOfIncome + currentIncome
}, 0)

const balance = (totalIncome - totalExpenses).toFixed(2)
const balanceIsPositive = balance > 0

const status = balanceIsPositive
    ? 'Positive'
    : 'Negative'

const message = `The Family balance is currently ${status}. It is at ${balance} U$`
console.log(message)