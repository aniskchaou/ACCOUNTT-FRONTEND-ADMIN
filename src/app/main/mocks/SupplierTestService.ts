import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})


export default class SupplierTestService implements Service {
    public ID = new BehaviorSubject<string>(null);


    static _supplier = [{
        'id': 1,
        'name': 'Auda Crête',
        'email': 'AudaCrete@armyspy.com',
        'phone': '01.97.40.47.50',
        'billing_country': '  ',
        'billing_city': '  ',
        'billing_zip': '  ',
        'shipping_country': '  ',
        'shipping_city': '  ',
        'shipping_zip': '  '
    }]
    static id = 2

    public getAll() {
        return SupplierTestService._supplier;
    }

    public get(id) {
        return SupplierTestService._supplier.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = SupplierTestService.id
        SupplierTestService._supplier.push(data);
        SupplierTestService.id++
    };

    public update(data) {

        var foundIndex = SupplierTestService._supplier.findIndex(item => item.id === data.id);
        SupplierTestService._supplier[foundIndex] = data;
    };

    public remove(supplier) {

        SupplierTestService._supplier.splice(SupplierTestService._supplier.indexOf(supplier), 1);
    };


}