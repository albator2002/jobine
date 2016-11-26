///<reference path="../node_modules/rxjs/Observable.d.ts"/>
// authentication.service.ts
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ProfileService} from './profile.service';
import {Profile} from "./profile";

@Injectable()
export class AuthenticationService {
    token: string;
    svrProfile:ProfileService;

    constructor(private http: Http, svrProfile:ProfileService) {
        this.token = localStorage.getItem('token');
        this.http = http;
        this.svrProfile = svrProfile;
    }
    private api_URL :string = 'http://localhost:4711/api';

    login(username: String, password: String){

         return this.http.post(this.api_URL+'/login', JSON.stringify({
             username: username,
             password: password
         }), {
             headers: new Headers({
             'Content-Type': 'application/json'
            })
         })
         .map((res : any) => {
             let data = res.json();
             this.svrProfile.pr = new Profile(data._id, data.profile.firstname,data.profile.lastname,data.profile.email,data.profile.password);
             this.token = data.profile.token;
             localStorage.setItem('token', this.token);
         });
    }

    logout() {
         return this.http.get(this.api_URL+'/logout', {
         headers: new Headers({
         'x-security-token': this.token
         })
         })
         .map((res : any) => {
         this.token = undefined;
         localStorage.removeItem('token');
         });



    }
}/**
 * Created by Alain on 5/10/2016.
 */
