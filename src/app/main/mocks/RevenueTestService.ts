import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})


export default class RevenueTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    static _revenue = [{
        'id': 1,
        'date': '12 / 11 / 2020',
        'amount': '2316',
        'account_id': '5494 9374 2335 5226',
        'description': '',
        'customer_id': 'Noémi Goguen',
        'category_id': '',
        'reference': ''
    }]
    static id = 2

    public getAll() {
        return RevenueTestService._revenue;
    }

    public get(id) {
        return RevenueTestService._revenue.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = RevenueTestService.id
        RevenueTestService._revenue.push(data);
        RevenueTestService.id++
    };

    public update(data) {

        var foundIndex = RevenueTestService._revenue.findIndex(item => item.id === data.id);
        RevenueTestService._revenue[foundIndex] = data;
    };

    public remove(revenue) {

        RevenueTestService._revenue.splice(RevenueTestService._revenue.indexOf(revenue), 1);
    };


}