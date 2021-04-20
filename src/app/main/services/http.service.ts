
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Service from '../interfaces/Service';

@Injectable({
    providedIn: 'root'
})

export class HTTPService implements Service {

    headers = { 'content-type': 'application/json', 'withCredentials': 'true' }
    http_url: string

    constructor(private http: HttpClient) {
    }

    setURL(url) {
        this.http_url = url
    }
    update(old: any, data: any) {
        throw new Error('Method not implemented.');
    }
    getAll() {
        return this.http.get(this.http_url + "/all");
    }
    get(id: any) {
        return this.http.get(this.http_url + "/" + id);
    }
    async create(data) {
        const body = JSON.stringify(data);
        await this.http.post(this.http_url + "/create", body, { 'headers': this.headers }).toPromise();
    }
    async remove(id: any) {
        await this.http.delete(this.http_url + "/delete/" + id, { headers: new HttpHeaders({ 'Content-Type': 'text/plain' }), responseType: 'text' }).toPromise();
    }



}