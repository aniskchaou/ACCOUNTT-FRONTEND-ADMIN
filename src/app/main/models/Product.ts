

export default class Product {
    id: number
    name: string
    description: string
    sale_price: string
    purchase_price: string
    tax_id: string
    category_id: string
    unit_id: string
    type: string

    constructor(
        id: number,
        name: string,
        description: string,
        sale_price: string,
        purchase_price: string,
        tax_id: string,
        category_id: string,
        unit_id: string,
        type: string
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.sale_price = sale_price
        this.purchase_price = purchase_price
        this.tax_id = tax_id
        this.category_id = category_id
        this.unit_id = unit_id
        this.type = type
    }

}