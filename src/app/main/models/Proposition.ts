

export default class Proposition {
    id: number
    supplier: string
    product_id: string
    purchase_date: string
    purchase_invoiceNo: string
    purchase_status: string


    constructor(
        id: number,
        supplier: string,
        product_id: string,
        purchase_date: string,
        purchase_invoiceNo: string,
        purchase_status: string
    ) {
        this.id = id
        this.supplier = supplier
        this.product_id = product_id
        this.purchase_date = purchase_date
        this.purchase_invoiceNo = purchase_invoiceNo
        this.purchase_status = purchase_status
    }


}