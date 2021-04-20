import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class TransfertMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Transfert a été ajouté avec succés',
        'edit': ' Transfert a été modifié avec succés',
        'delete': ' Transfert a été supprimé avec succés'
    }
    validationMessage = {
        'name': ' Nom est obligatoire. ',
        'rate': 'Taux est obligatoire. ',
    }

    constructor() {

    }
}