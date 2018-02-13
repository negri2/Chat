import { Talk } from '../models/talk';
import { Http, Headers, Response } from '@angular/http'
import { Injectable } from '@angular/core';

export class ApiService {

    readonly apiUrl: string = 'http://localhost:5000/api/';

    constructor(private http: Http) { }

    private getRequestHeaders(): Headers {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return headers;
      }

    getUser() {

    }

    postUser() {

    }

    getMessages(): Talk[] {
        let body: any;
        let headers: Headers;

        this.http
            .get(this.apiUrl + 'Talks')
            .subscribe(
            (res: Response) =>
            {
                return (res);
            } );

            return null;
    }

    postMessage(talk: Talk) {
        let body: any;
        let headers: Headers;

        this.http
            .post(this.apiUrl + 'Talks', body, { headers: headers })
            .subscribe(
            (res: Response) =>
            {
                return (res);
            } );
    }
}