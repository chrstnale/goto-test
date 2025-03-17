import readline from 'readline'
import { Bank } from './models.ts/Bank'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const bank = new Bank(0)

function main() {

    rl.question('$ What would you like to do? \n1. Credit\n2. Debit\n3. Check balance\n4. Exit\n => ', (line) => {
        if(line === '1') {
            rl.question('$ Enter Amount: ', (line) => {
                try {
                    bank.deposit(line)
                    console.log('Successful!')
                    main()
                } catch(error: any) {
                    console.log(error.message)
                    main()
                }
            })
        } else if(line === '2') {
            rl.question('$ Enter Amount: ', (line) => {
                try {
                    bank.withdraw(line)
                    console.log('$ Done!')
                    main()
                } catch(error: any) {
                    console.log(error.message)
                    main()
                }
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

