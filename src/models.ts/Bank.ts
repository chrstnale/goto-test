export class Bank {
    private static MAXIMUM_BALANCE = 1000000000
    private balance: number

    constructor(balance: number) {
        this.balance = balance
    }

    deposit(amount: string = '1D 10C') {
        try{
            const parsedAmount = this.parseAmount(amount)
            this.validateDepositAmount(parsedAmount)
            this.balance += parsedAmount
        } catch(error: any) {
            throw new Error(error.message)
        }
    }

    withdraw(amount: string = '1D 10C'): void {
        try {
            const parsedAmount = this.parseAmount(amount)
            this.balance -= parsedAmount
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    getBalance(): number {
        return this.balance
    }

    getStringBalance(): string {
        const dollar = Math.floor(this.balance)
        const cent = Math.round((this.balance - dollar) * 100)
        
        const dollarString = `${dollar}D`
        const centString = `${cent}C`
        
        return `${dollarString} ${centString}`
    }

    private parseAmount(amount: string): number {
        const amounts = amount.split(' ')
        const dollar = amounts.find(amount => amount.includes('D'))
        const cent = amounts.find(amount => amount.includes('C'))

        if(!dollar && !cent) {
            throw new Error('$ Invalid amount format! Please try again with the format: 1D 10C (xD yC)')
        }
        
        let dollarAmount = 0
        let centAmount = 0
        if(dollar) {
            dollarAmount = parseFloat(dollar.replace('D', ''))
        }
        if(cent) {
            centAmount = parseFloat(cent.replace('C', ''))
        }
        return dollarAmount + centAmount / 100

    }

    private validateDepositAmount(amount: number): void {
        if (this.balance + amount > Bank.MAXIMUM_BALANCE) {
            throw new Error('$ Balance exceeds the maximum limit')
        }
    }
    
}