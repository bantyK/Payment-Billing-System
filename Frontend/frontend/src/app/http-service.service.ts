import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Admin } from './model/admin';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    adminCredentialsValidationURL = 'http://localhost:8080/admin_login';
    createAdminURL = 'http://localhost:8080/create_admin';
    getAllAdminsURL = 'http://localhost:8080/admins';
    deleteAdminURL = 'http://localhost:8080/delete/';

    constructor (private _http: Http) { }

    checkIfAdminCredentialsAreValid(email, password) {
        var adminInfoJson = JSON.stringify({'username': email, 'password': password});
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this.adminCredentialsValidationURL, adminInfoJson, {
            headers: headers
        }).map(res => res.json());
    }

    doGet() {
        return this._http.get('http://localhost:8080/').map(result => result);
    }

    createNewAccountant(admin: Admin) {
        var headers = new Headers();
        var requestBody = JSON.stringify(admin);
        headers.append('Content-Type', 'application/json');

        return this._http.post(this.createAdminURL, requestBody, {
            headers: headers
        }).map(res => res);
    }

    getAllAccountants() {
        return this._http.get(this.getAllAdminsURL).map(result => result.json());
    }

    deleteAdmin(adminId: number) {
        var body = 'id='+adminId;
        var headers = new Headers();
        return this._http.post(this.deleteAdminURL+'/'+adminId,body,headers).map(result => result.json());
    }
}
