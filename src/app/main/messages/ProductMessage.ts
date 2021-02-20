import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ProductMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Produit a été ajouté avec succés',
        'edit': 'Produit a été modifié avec succés',
        'delete': 'Produit a été supprimé avec succés'
    }
    validationMessage = {
        'name': ' Nom est obligatoire. ',
        'description': 'Description est obligatoire. ',
        'sale_price': ' Prix vente est obligatoire. ',
        'purchase_price': 'Prix achat est obligatoire. ',
        'tax_id': ' Tax est obligatoire. ',
        'category_id': 'Categorie  est obligatoire. ',
        'unit_id': 'unité  est obligatoire. ',
        'type': 'Type  est obligatoire. ',
    }

    constructor() {

    }
}