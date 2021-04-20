import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class BillTestService {
    public ID = new BehaviorSubject<string>(null);

    static _bill = [{
        'id': 1,
        'billNumber': 'Noémi Goguen',
        'supplier': 'Banque populaire',
        'category': 'Maintenance',
        'billDate': '21/03/2020',
        'dueDate': '22/04/2020',
        'status': 'Accepte'
    }]

    static id = 2

    public getAll() {
        return BillTestService._bill;
    }

    public get(id) {
        return BillTestService._bill.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = BillTestService.id
        BillTestService._bill.push(data);
        BillTestService.id++
    };

    public update(data) {

        var foundIndex = BillTestService._bill.findIndex(item => item.id === data.id);
        BillTestService._bill[foundIndex] = data;
    };

    public remove(bill) {

        BillTestService._bill.splice(BillTestService._bill.indexOf(bill), 1);
    };
}