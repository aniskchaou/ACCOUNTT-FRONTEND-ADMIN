

export default class Supplier {
    id: number
    name: string
    email: string
    phone: string
    billing_country: string
    billing_city: string
    billing_zip: string
    shipping_country: string
    shipping_city: string
    shipping_zip: string

    constructor(
        id: number,
        name: string,
        email: string,
        phone: string,
        billing_country: string,
        billing_city: string,
        billing_zip: string,
        shipping_country: string,
        shipping_city: string,
        shipping_zip: string
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.phone = phone
        this.billing_country = billing_country
        this.billing_city = billing_city
        this.billing_zip = billing_zip
        this.shipping_country = shipping_country
        this.shipping_city = shipping_city
        this.shipping_zip = shipping_zip
    }

}