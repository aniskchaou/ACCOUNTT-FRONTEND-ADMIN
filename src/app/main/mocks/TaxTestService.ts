import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class TaxTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _tax = []
    static id = 0

    public getAll() {
        return this._tax;
    }

    public get(id) {
        return this._tax.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = TaxTestService.id
        this._tax.push(data);
        TaxTestService.id++
        console.log(data)
    };

    public update(old, data) {

        var foundIndex = this._tax.findIndex(item => item === old);
        this._tax[foundIndex] = data;
    };

    public remove(id) {
        this._tax.splice(id, 1);
    };


}