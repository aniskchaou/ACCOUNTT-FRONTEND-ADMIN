import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class PropositionMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Proposition a été ajouté avec succés',
        'edit': 'Proposition a été modifié avec succés',
        'delete': 'Proposition a été supprimé avec succés'
    }
    validationMessage = {
        'supplier': ' Fournissuer est obligatoire. ',
        'product_id': ' Produit est obligatoire. ',
        'purchase_date': 'Date  est obligatoire. ',
        'purchase_invoiceNo': 'Facture  est obligatoire. ',
        'purchase_status': ' Statut est obligatoire. ',
    }

    constructor() {

    }
}