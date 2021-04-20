

export default class Revenue {
    id: number
    date: string
    amount: string
    account_id: string
    description: string
    customer_id: string
    category_id: string
    reference: string


    constructor(
        id: number,
        date: string,
        amount: string,
        account_id: string,
        description: string,
        customer_id: string,
        category_id: string,
        reference: string
    ) {
        this.id = id
        this.date = date
        this.amount = amount
        this.account_id = account_id
        this.description = description
        this.customer_id = customer_id
        this.category_id = category_id
        this.reference = reference
    }

}