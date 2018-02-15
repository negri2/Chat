import { Talk } from '../models/talk';
import { Http, Headers, Response } from '@angular/http'
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    readonly apiUrl: string = 'http://localhost:5000/api/';

    constructor(private http: Http) { }

    private getRequestHeaders(): Headers {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return headers;
    }

    private get<T>(apiUrl: string, headers: Headers) {
        return new Promise<T>((resolve, reject) => {
            this.http
                .get(apiUrl, { headers: headers })
                .subscribe(
                    (res: Response) => resolve(res.json() as T),
                    error => reject(error));
        });
    }

    private post<T>(apiUrl: string, body: any, headers: Headers) {
        return new Promise<T>((resolve, reject) => {
            this.http
                .post(apiUrl, body, { headers: headers })
                .subscribe(
                    (res: Response) => resolve(res.json() as T),
                    error => reject(error));
        });
    }

    getUser() {

    }

    postUser() {

    }

    getMessages(): Promise<any> {
        return this.get(this.apiUrl + 'Talks', this.getRequestHeaders());
    }

    postMessage(talk: Talk): Promise<any> {
        return this.post(this.apiUrl + 'Talks', talk, this.getRequestHeaders());
    }
}