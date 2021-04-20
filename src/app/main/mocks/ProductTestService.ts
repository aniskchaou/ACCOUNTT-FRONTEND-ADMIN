import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ProductTestService implements Service {
    public ID = new BehaviorSubject<string>(null);

    static _product = [{
        'id': 1,
        'name': 'Iphone 6s',
        'description': 'Iphone 6s mobile phone ',
        'sale_price': '3456',
        'purchase_price': '1223',
        'tax_id': 'TVA',
        'category_id': 'électroménager',
        'unit_id': ' ',
        'type': ' '
    }]
    static id = 2

    public getAll() {
        return ProductTestService._product;
    }

    public get(id) {
        return ProductTestService._product.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = ProductTestService.id
        ProductTestService._product.push(data);
        ProductTestService.id++
    };



    public update(data) {

        var foundIndex = ProductTestService._product.findIndex(item => item.id === data.id);
        ProductTestService._product[foundIndex] = data;
    };

    public remove(product) {

        ProductTestService._product.splice(ProductTestService._product.indexOf(product), 1);
    };


}