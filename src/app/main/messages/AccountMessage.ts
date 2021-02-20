import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class AccountMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Compte a été ajouté avec succés',
        'edit': 'Compte a été modifié avec succés',
        'delete': 'Compte a été supprimé avec succés'
    }
    validationMessage = {
        'holder_name': 'Titulaire  est obligatoire. ',
        'bank_name': 'Nom de banque est obligatoire. ',
        'account_number': 'No de compte est obligatoire. ',
        'opening_balance': 'Balance  est obligatoire. ',
        'contact_number': 'Contact  est obligatoire. ',
        'bank_address': 'Adresse de banque  est obligatoire. ',
    }

    constructor() {

    }
}