

export default class Invoice {
    id: number
    invoiceNumber: string
    Customer: string
    Issue: string
    date: string
    dueDate: string
    dueAmount: string
    Status: string


    constructor(
        id: number,
        invoiceNumber: string,
        Customer: string,
        Issue: string,
        date: string,
        dueDate: string,
        dueAmount: string,
        Status: string
    ) {
        this.id = id
        this.invoiceNumber = invoiceNumber
        this.Customer = Customer
        this.Issue = Issue
        this.date = date
        this.dueDate = dueDate
        this.dueAmount = dueAmount
        this.Status = Status
    }



}