import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class UserMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Utilisateur a été ajouté avec succés',
        'edit': ' Utilisateur a été modifié avec succés',
        'delete': 'Utilisateur a été supprimé avec succés'
    }
    validationMessage = {
        'name': ' Nom est obligatoire. ',
        'rate': 'Taux est obligatoire. ',
    }

    constructor() {

    }
}