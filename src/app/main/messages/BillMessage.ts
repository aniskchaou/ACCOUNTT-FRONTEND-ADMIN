import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class BillMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Tax a été ajouté avec succés',
        'edit': ' Tax a été modifié avec succés',
        'delete': 'Tax a été supprimé avec succés'
    }
    validationMessage = {
        'name': ' Nom est obligatoire. ',
        'rate': 'Taux est obligatoire. ',
    }

    constructor() {

    }
}