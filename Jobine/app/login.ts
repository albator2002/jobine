/**
 * Created by Alain on 5/10/2016.
 */
// login.ts
import {Component} from '@angular/core';
import { FormBuilder, Validators, ControlGroup, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import { PolymerElement } from '@vaadin/angular2-polymer';
import {Authentication} from './authentication';

@Component({
    selector: 'login',
    directives: [

        NgIf ,
        PolymerElement('paper-input'),
        PolymerElement('paper-button'),
    ],
    providers: [FormBuilder],
    template: `
    <form [ngFormModel]="form" (submit)="onSubmit(form.value)">
      <div *ngIf="error">Check your user name or password</div>
      <div>
       <paper-input id="username" name="username" [(value)]="_username" error-message="Invalide" label="Username"></paper-input>
      </div>
      <div>
        <paper-input id="password" name="password" [(value)]="_password" type="password"></paper-input>
      </div>
      <div class="form-group">
        <paper-button raised on-click="submitForm()"   >submit</paper-button>
      </div>
    </form>
  `
})
export class Login {
    form: ControlGroup;
    error: boolean = false;
    _username:string;
    _password:string;
    constructor(fb: FormBuilder, public auth: Authentication, public router: Router) {
        this.form = fb.group({
            username:  ['', Validators.required],
            password:  ['', Validators.required]
        });
    }

    submitForm(value: any) {
        //var username = this.form.controls['username'].value;
        //var password = this.form.controls['password'].value;
        this.auth.login(this._username, this._password)
            .subscribe(
                (token: any) => {
                    var btnLogin = <HTMLElement>document.querySelector('#btnLogin');
                    btnLogin.hidden = true;
                    this.router.navigate(['../Menu'])},
                        () => { this.error = true; }

            );
    }
}