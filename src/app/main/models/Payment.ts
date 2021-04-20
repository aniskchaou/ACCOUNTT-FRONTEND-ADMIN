

export default class Payment {
  id: number
  date: string
  amount: string
  account: string
  Supplier: string
  category: string
  reference: string
  description: string



  constructor(
    id: number,
    date: string,
    amount: string,
    account: string,
    Supplier: string,
    category: string,
    reference: string,
    description: string
  ) {
    this.id = id
    this.date = date
    this.amount = amount
    this.account = account
    this.Supplier = Supplier
    this.category = category
    this.reference = reference
    this.description = description
  }



}