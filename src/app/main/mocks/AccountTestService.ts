import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class AccountTestService implements Service {
    public ID = new BehaviorSubject<string>(null);

    static _account = [{
        'id': 1,
        'holder_name': 'Noémi Goguen',
        'bank_name': 'Banque populaire',
        'account_number': 'FR29 NWBK 6016 1331 9268 19',
        'opening_balance': '2353',
        'contact_number': '5494 9374 2335 5226',
        'bank_address': '10 rue de Lyon 75000 Paris'
    }]
    static id = 2

    public getAll() {
        return AccountTestService._account;
    }

    public get(id) {
        return AccountTestService._account.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = AccountTestService.id
        AccountTestService._account.push(data);
        AccountTestService.id++
    };

    public update(data) {

        var foundIndex = AccountTestService._account.findIndex(item => item.id === data.id);
        AccountTestService._account[foundIndex] = data;
    };

    public remove(account) {

        AccountTestService._account.splice(AccountTestService._account.indexOf(account), 1);
    };


}