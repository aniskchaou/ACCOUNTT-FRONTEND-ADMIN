import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class UnitTestService {
    public ID = new BehaviorSubject<string>(null);

    static _unit = [{
        'id': 1,
        'unit': 'kg'
    }]
    static id = 2

    public getAll() {
        return UnitTestService._unit;
    }

    public get(id) {
        return UnitTestService._unit.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = UnitTestService.id
        UnitTestService._unit.push(data);
        UnitTestService.id++
    };

    public update(data) {

        var foundIndex = UnitTestService._unit.findIndex(item => item.id === data.id);
        UnitTestService._unit[foundIndex] = data;
    };

    public remove(unit) {

        UnitTestService._unit.splice(UnitTestService._unit.indexOf(unit), 1);
    };
}