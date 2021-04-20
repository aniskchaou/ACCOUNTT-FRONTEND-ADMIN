import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class UnitMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Unité a été ajouté avec succés',
        'edit': ' Unité a été modifié avec succés',
        'delete': ' Unité a été supprimé avec succés'
    }
    validationMessage = {
        'name': ' Nom est obligatoire. ',
        'rate': 'Taux est obligatoire. ',
    }

    constructor() {

    }
}