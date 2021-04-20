import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class TaxTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    static _tax = [{
        'id': 1,
        'name': 'TVA',
        'rate': '20'
    }]
    static id = 2

    public getAll() {
        return TaxTestService._tax;
    }

    public get(id) {
        return TaxTestService._tax.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = TaxTestService.id
        TaxTestService._tax.push(data);
        TaxTestService.id++

    };

    public update(data) {

        var foundIndex = TaxTestService._tax.findIndex(item => item.id === data.id);
        TaxTestService._tax[foundIndex] = data;
    };

    public remove(tax) {

        TaxTestService._tax.splice(TaxTestService._tax.indexOf(tax), 1);
    };


}