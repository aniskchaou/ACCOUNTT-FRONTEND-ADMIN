import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class UserTestService {
    public ID = new BehaviorSubject<string>(null);

    static _user = [{
        'id': 1,
        'username': 'Admin',
        'password': '*****',
        'email': 'admin@admin.com',
        'role': 'ADMIN',

    }]

    static id = 2

    public getAll() {
        return UserTestService._user;
    }

    public get(id) {
        return UserTestService._user.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = UserTestService.id
        UserTestService._user.push(data);
        UserTestService.id++
    };

    public update(data) {

        var foundIndex = UserTestService._user.findIndex(item => item.id === data.id);
        UserTestService._user[foundIndex] = data;
    };

    public remove(user) {

        UserTestService._user.splice(UserTestService._user.indexOf(user), 1);
    };
}