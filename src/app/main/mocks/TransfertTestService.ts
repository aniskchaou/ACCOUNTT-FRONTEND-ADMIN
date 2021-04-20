import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class TransfertTestService {
    public ID = new BehaviorSubject<string>(null);

    static _transfert = [{
        'id': 1,
        'date': '21/01/2020',
        'fromAccount': 'FR29 NWBK 6016 1331 9268 19',
        'toAccount': 'FR29 NWBK 6016 1331 9268 19',
        'amount': '2353',
        'reference': '5494 9374 2335 5226',
        'description': '10 rue de Lyon 75000 Paris'
    }]



    static id = 2

    public getAll() {
        return TransfertTestService._transfert;
    }

    public get(id) {
        return TransfertTestService._transfert.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = TransfertTestService.id
        TransfertTestService._transfert.push(data);
        TransfertTestService.id++
    };

    public update(data) {

        var foundIndex = TransfertTestService._transfert.findIndex(item => item.id === data.id);
        TransfertTestService._transfert[foundIndex] = data;
    };

    public remove(transfert) {

        TransfertTestService._transfert.splice(TransfertTestService._transfert.indexOf(transfert), 1);
    };
}