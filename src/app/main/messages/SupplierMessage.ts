import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class SupplierMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Founisseur a été ajouté avec succés',
        'edit': 'Founisseur a été modifié avec succés',
        'delete': ' Founisseur a été supprimé avec succés'
    }
    validationMessage = {
        'name': ' Nom est obligatoire. ',
        'email': ' Email est obligatoire. ',
        'phone': '  est obligatoire. ',
        'billing_country': ' Pays est obligatoire. ',
        'billing_city': ' Vlle est obligatoire. ',
        'billing_zip': ' Code postale est obligatoire. ',
        'shipping_country': 'Pays  est obligatoire. ',
        'shipping_city': ' Ville est obligatoire. ',
        'shipping_zip': 'Code postale  est obligatoire. ',
    }

    constructor() {

    }
}