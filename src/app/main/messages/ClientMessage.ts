import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ClientMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Client a été ajouté avec succés',
        'edit': 'Client a été modifié avec succés',
        'delete': 'Client a été supprimé avec succés'
    }
    validationMessage = {
        'name': 'Nom  est obligatoire. ',
        'email': 'Email  est obligatoire. ',
        'phone': 'Téléphone  est obligatoire. ',
        'billing_country': 'Pays  est obligatoire. ',
        'billing_city': ' Ville est obligatoire. ',
        'billing_zip': 'Code postale  est obligatoire. ',
        'shipping_country': 'Pays  est obligatoire. ',
        'shipping_city': ' Ville est obligatoire. ',
        'shipping_zip': ' Code postale est obligatoire. ',
    }

    constructor() {

    }
}