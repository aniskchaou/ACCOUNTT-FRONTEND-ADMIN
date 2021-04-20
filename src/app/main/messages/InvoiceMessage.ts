import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class InvoiceMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Facture a été ajouté avec succés',
        'edit': ' Facture a été modifié avec succés',
        'delete': ' Facture a été supprimé avec succés'
    }
    validationMessage = {
        'name': ' Nom est obligatoire. ',
        'rate': 'Taux est obligatoire. ',
    }

    constructor() {

    }
}