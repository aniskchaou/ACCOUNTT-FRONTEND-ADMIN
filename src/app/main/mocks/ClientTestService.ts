import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ClientTestService implements Service {
    public ID = new BehaviorSubject<string>(null);

    static _client = [{
        'id': 1,
        'name': 'Raymond Daviau ',
        'email': 'RaymondDaviau@teleworm.us',
        'phone': '05.99.30.99.98',
        'billing_country': 'Germany',
        'billing_city': 'Munich',
        'billing_zip': '86T67',
        'shipping_country': 'Germany',
        'shipping_city': 'Munich',
        'shipping_zip': '76878',
        'solde': 100
    }, {
        'id': 2,
        'name': 'Raymond Daviau ',
        'email': 'RaymondDaviau@teleworm.us',
        'phone': '05.99.30.99.98',
        'billing_country': 'Germany',
        'billing_city': 'Berlin',
        'billing_zip': '9787',
        'shipping_country': 'Germany',
        'shipping_city': 'Berlin',
        'shipping_zip': '80000',
        'solde': 100
    }, {
        'id': 3,
        'name': 'Raymond Daviau ',
        'email': 'RaymondDaviau@teleworm.us',
        'phone': '05.99.30.99.98',
        'billing_country': 'Brasil',
        'billing_city': 'Rio de janeiro',
        'billing_zip': '343423',
        'shipping_country': 'Brasil',
        'shipping_city': 'Rio de janeiro',
        'shipping_zip': '343423',
        'solde': 100
    }]
    static id = 2

    public getAll() {
        return ClientTestService._client;
    }

    public get(id) {
        return ClientTestService._client.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = ClientTestService.id
        ClientTestService._client.push(data);
        ClientTestService.id++
    };

    public update(data) {

        var foundIndex = ClientTestService._client.findIndex(item => item.id === data.id);
        ClientTestService._client[foundIndex] = data;
    };

    public remove(product) {

        ClientTestService._client.splice(ClientTestService._client.indexOf(product), 1);
    };


}