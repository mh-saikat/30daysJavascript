class account {
    #balance;
    constructor(initialbalance){
        if (initialbalance < 0) {
            throw new Error ("Initial balance cannot be negative")
        } else{
            this.#balance = initialbalance
        }
    }

    deposit(amount){
        if (amount < 0) {
            throw new Error("Negative amount cannot be deposit")
        } else{
            this.#balance += amount;
            console.log(`Deposit amount is ${amount} and current balance is ${this.#balance}`);     
        }
    }
    
    withdraw(amount){
        if (amount < 0) {
            throw new Error("Withdraw amount must be positive")
        } else if( amount > this.#balance){
            throw new Error("Insufficient funds.")
        } else{
            this.#balance -= amount
            console.log(`Withdraw amount is ${amount} and current balance is ${this.#balance}`);
        }
    }

    getbalance(){
        return this.#balance;
        
    }
}

const myAccount = new account(25555);
myAccount.deposit(1000)
myAccount.withdraw(100)
console.log(myAccount.getbalance())

