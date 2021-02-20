import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class BuyMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Achat a été ajouté avec succés',
        'edit': 'Achat a été modifié avec succés',
        'delete': 'Achat a été supprimé avec succés'
    }
    validationMessage = {
        'purchase_invoiceNo': 'facture No doit etre definie.',
        'date_buy': 'date achat doit etre definie.'
    }

    constructor() {

    }
}