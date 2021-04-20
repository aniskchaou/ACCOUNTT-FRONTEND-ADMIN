

export default class Transfert {
  id: number
  date: string
  fromAccount: string
  toAccount: string
  amount: string
  reference: string
  description: string

  constructor(
    id: number,
    date: string,
    fromAccount: string,
    toAccount: string,
    amount: string,
    reference: string,
    description: string
  ) {
    this.id = id
    this.date = date
    this.fromAccount = fromAccount
    this.toAccount = toAccount
    this.amount = amount
    this.reference = reference
    this.description = description
  }





}