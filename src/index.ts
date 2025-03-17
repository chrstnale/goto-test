import readline from 'readline'
import { Bank } from './models.ts/Bank'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const bank = new Bank(0)

function main() {

    rl.question('$ What would you like to do? \n1. Deposit\n2. Withdraw\n3. Check balance\n4. Exit\n => ', (line) => {
        if(line === '1') {
            rl.question('$ Enter Amount: ', (line) => {
                bank.deposit(line)
                console.log('Successful!')
                main()
            })
        } else if(line === '2') {
            rl.question('$ Enter Amount: ', (line) => {
                bank.withdraw(line)
                console.log('$ Done!')
                main()
            })
        } else if(line === '3') {
            const balance = bank.getStringBalance()
            console.log('$ Current balance is ', balance)
            main()
        } else if(line === '4') {
            console.log('$ Thank you!')
            rl.close()
            process.exit(0)
        } else {
            console.log('$ Invalid option! Please try again.')
            main()
        }
    })
}

main()

