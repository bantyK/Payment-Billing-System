import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    adminCredentialsValidationURL = 'http://localhost:8080/admin_login';

    constructor (private _http: Http) { }

    checkIfAdminCredentialsAreValid(email, password) {
        console.log(email + " " + password);
        var adminInfoJson = JSON.stringify({'username': email, 'password': password});
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this.adminCredentialsValidationURL, adminInfoJson, {
            headers: headers
        }).map(res => res);
    }

    doGet() {
        return this._http.get('http://localhost:8080/').map(result => result);
    }
}
