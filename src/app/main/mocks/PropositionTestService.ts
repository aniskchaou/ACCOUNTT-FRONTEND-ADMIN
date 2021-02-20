import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class PropostionTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _proposition = []
    static id = 0

    public getAll() {
        return this._proposition;
    }

    public get(id) {
        return this._proposition.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = PropostionTestService.id
        this._proposition.push(data);
        PropostionTestService.id++
        console.log(data)
    };

    public update(old, data) {

        var foundIndex = this._proposition.findIndex(item => item === old);
        this._proposition[foundIndex] = data;
    };

    public remove(id) {
        this._proposition.splice(id, 1);
    };


}