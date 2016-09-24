/**
 * Created by Alain on 5/10/2016.
 */
// login.ts
import {Component} from '@angular/core';
import {  NgIf} from '@angular/common';
import {Router} from '@angular/router';
//import { PolymerElement } from '@vaadin/angular2-polymer';
import {Authentication} from './authentication';

@Component({
    selector: 'login',


    template: `
    <form  >
      <div *ngIf="error">Check your user name or password</div>
      <div>
       <paper-input id="username" name="username" [(value)]="_username" error-message="Invalide" label="Username"></paper-input>
      </div>
      <div>
        <paper-input id="password" name="password" [(value)]="_password" type="password"></paper-input>
      </div>
      <div class="form-group">
        <paper-button raised on-click="login()"   >submit</paper-button>
      </div>
    </form>
  `
})
export class Login {

    error: boolean = false;
    _username:string = "";
    _password:string = "";

    constructor( private auth: Authentication,private router:Router ) {
       // this.form = fb.group({
       //     username:  ['', Validators.required],
       //     password:  ['', Validators.required]
       // });
    }

    login() {
        //var username = this.form.controls['username'].value;
        //var password = this.form.controls['password'].value;
        this.auth.login(this._username, this._password)
            .subscribe(
                (token: any) => {
                    var btnLogin = <HTMLElement>document.querySelector('#btnLogin');
                    btnLogin.hidden = true;
                    this.router.navigate(['../Menu'])
                },
                        () => { this.error = true; }

            );
    }
}