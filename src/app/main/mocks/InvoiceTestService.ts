import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class InvoiceTestService {
    public ID = new BehaviorSubject<string>(null);

    static _invoice = [{
        'id': 1,
        'invoiceNumber': '5456 643 80654',
        'customer': 'Banque populaire',
        'issueDate': '21/01/2019',
        'dueDate': '21/01/2019',
        'dueAmount': '5494',
        'status': 'en attente'
    }]

    static id = 2

    public getAll() {
        return InvoiceTestService._invoice;
    }

    public get(id) {
        return InvoiceTestService._invoice.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = InvoiceTestService.id
        InvoiceTestService._invoice.push(data);
        InvoiceTestService.id++
    };

    public update(data) {

        var foundIndex = InvoiceTestService._invoice.findIndex(item => item.id === data.id);
        InvoiceTestService._invoice[foundIndex] = data;
    };

    public remove(invoice) {

        InvoiceTestService._invoice.splice(InvoiceTestService._invoice.indexOf(invoice), 1);
    };
}