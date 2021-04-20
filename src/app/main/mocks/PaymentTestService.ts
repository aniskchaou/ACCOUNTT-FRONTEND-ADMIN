import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class PaymentTestService {
    public ID = new BehaviorSubject<string>(null);

    static _payment = [{
        'id': 1,
        'date': '11/8/2021',
        'amount': '75454',
        'account': 'FR29 NWBK 6016 1331 9268 19',
        'supplier': '',
        'category': '',
        'reference': '87J67R6F76',
        'description': 'paye'
    }]

    static id = 2

    public getAll() {
        return PaymentTestService._payment;
    }

    public get(id) {
        return PaymentTestService._payment.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = PaymentTestService.id
        PaymentTestService._payment.push(data);
        PaymentTestService.id++
    };

    public update(data) {

        var foundIndex = PaymentTestService._payment.findIndex(item => item.id === data.id);
        PaymentTestService._payment[foundIndex] = data;
    };

    public remove(payment) {

        PaymentTestService._payment.splice(PaymentTestService._payment.indexOf(payment), 1);
    };
}