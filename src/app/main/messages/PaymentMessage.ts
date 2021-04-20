import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class PaymentMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Payment a été ajouté avec succés',
        'edit': ' Payment a été modifié avec succés',
        'delete': 'Payment a été supprimé avec succés'
    }
    validationMessage = {
        'name': ' Nom est obligatoire. ',
        'rate': 'Taux est obligatoire. ',
    }

    constructor() {

    }
}