

export default class Bill {
    id: number
    billNumber: string
    supplier: string
    category: string
    billDate: string
    dueDate: string
    status: string



    constructor(
        id: number,
        billNumber: string,
        supplier: string,
        category: string,
        billDate: string,
        dueDate: string,
        status: string
    ) {
        this.id = id
        this.billNumber = billNumber
        this.supplier = supplier
        this.category = category
        this.billDate = billDate
        this.dueDate = dueDate
        this.status = status
    }


}