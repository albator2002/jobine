///<reference path="../node_modules/rxjs/Observable.d.ts"/>
// authentication.service.ts
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Profile} from "./profile";


@Injectable()
export class ProfileService {
    token: string;
    pr:Profile;

    constructor(private http: Http) {
        this.token = localStorage.getItem('token');
        this.http = http;
        this.pr = new Profile("","","","");
    }
    private api_URL :string = 'http://localhost:4711/api';

    // createProfile
    createProfile(){
         let profile = this.pr;
         return this.http.post(this.api_URL+'/profiles', profile, {
             headers: new Headers({
             'Content-Type': 'application/json'
            })
         })
         .map((res : any) => {
             let data = res.json();
             this.token = data.profile.token;
             localStorage.setItem('token', this.token);
         });
    }

    //TODO : updateProfile
    updateProfile() {

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
