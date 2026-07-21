// Task 1
let balance = Number(prompt("Enter your balance: "))

let option = prompt("Do you want to store or withdrawal?")

switch (option) {
    case "Withdrawal":
        let withdrawal = Number(prompt("Enter amount to withdraw: "))

        if (withdrawal > balance) {
            alert("Your balance is insufficient")
        } else {
            balance -= withdrawal
        }
        break
    case "Store":
        let store = Number(prompt("Enter amount you want to store: "))
        balance += store
        break
    default:
        alert("Choose an option")
        break
}

alert(`Your balance is ${balance}`)

// Task 1
let date = new Date().getDay()

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

console.log(day[date])


