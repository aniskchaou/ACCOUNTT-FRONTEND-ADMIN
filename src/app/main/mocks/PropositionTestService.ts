import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class PropostionTestService implements Service {
    public ID = new BehaviorSubject<string>(null);

    static _proposition = [{
        'id': 1,
        'supplier': 'Seymour Michel',
        'product_id': 'Iphone 6s',
        'purchase_date': '12 / 12 / 2020',
        'purchase_invoiceNo': 'PRO 8796',
        'purchase_status': 'Accepté'
    }]
    static id = 0

    public getAll() {
        return PropostionTestService._proposition;
    }

    public get(id) {
        return PropostionTestService._proposition.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = PropostionTestService.id
        PropostionTestService._proposition.push(data);
        PropostionTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = PropostionTestService._proposition.findIndex(item => item.id === data.id);
        PropostionTestService._proposition[foundIndex] = data;
    };

    public remove(product) {

        PropostionTestService._proposition.splice(PropostionTestService._proposition.indexOf(product), 1);
    };


}