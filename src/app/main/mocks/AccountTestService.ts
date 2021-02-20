import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class AccountTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _account = []
    static id = 0

    public getAll() {
        return this._account;
    }

    public get(id) {
        return this._account.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = AccountTestService.id
        this._account.push(data);
        AccountTestService.id++
        console.log(data)
    };

    public update(old, data) {

        var foundIndex = this._account.findIndex(item => item === old);
        this._account[foundIndex] = data;
    };

    public remove(id) {
        this._account.splice(id, 1);
    };


}