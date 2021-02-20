import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class RevenueMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Revenue a été ajouté avec succés',
        'edit': 'Revenue a été modifié avec succés',
        'delete': 'Revenue a été supprimé avec succés'
    }
    validationMessage = {
        'date': 'Date  est obligatoire. ',
        'amount': 'Montant est obligatoire.',
        'account_id': 'Compte est obligatoire. ',
        'description': 'Description  est obligatoire. ',
        'customer_id': 'Client  est obligatoire. ',
        'category_id': 'Categorie  est obligatoire. ',
        'reference': 'Reference  est obligatoire. ',
    }

    constructor() {

    }
}