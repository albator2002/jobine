/**
 * Created by Alain on 5/10/2016.
 */
// login.component.ts
import {Component} from '@angular/core';
import {  NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'login',


    template: `
    <form  #loginForm="ngForm">
      <div *ngIf="error">Check your user name or password</div>
      <div>
       <paper-input id="username" ngDefaultControl [(ngModel)]="username" name="username" required="true"
               #usr="ngModel" error-message="Invalide" label="Username"></paper-input>
      </div>
      <div>
        <paper-input id="password" ngDefaultControl [(ngModel)]="password" name="password" required="true"
               #pwd="ngModel" type="password"></paper-input>
      </div>
      <div >
        <paper-button raised on-click="login()"   >submit</paper-button>
      </div>
    </form>
  `
})
export class LoginComponent {

    error: boolean = false;
    username:string = "";
    password:string = "";

    constructor(private auth: AuthenticationService, private router:Router ) {

    }

    login() {
        this.auth.login( this.username,  this.password)
            .subscribe(
                (token: any) => {
                    var btnLogin = <HTMLElement>document.querySelector('#btnLogin');
                    var btnNewAccount = <HTMLElement>document.querySelector('#btnNewAccount');
                    btnLogin.hidden = true;
                    btnNewAccount.hidden = true;
                    this.router.navigate([{outlets: {leftoutlet: 'menu'}}])
                },
                        () => { this.error = true; }

            );
    }
}