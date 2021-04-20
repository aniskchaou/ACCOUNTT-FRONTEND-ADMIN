

export default class Account {
    id: number
    holder_name: string
    account_number: string
    opening_balance: string
    contact_number: string
    bank_address: string


    constructor(
        id: number,
        holder_name: string,
        account_number: string,
        opening_balance: string,
        contact_number: string,
        bank_address: string
    ) {
        this.id = id
        this.holder_name = holder_name
        this.account_number = account_number
        this.opening_balance = opening_balance
        this.contact_number = contact_number
        this.bank_address = bank_address
    }

}