/**
 * Created by Alain on 5/10/2016.
 */
// profile.component.ts
import {Component, OnInit} from '@angular/core';
import {  NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service'; //TODO : remove
import {ProfileService} from './profile.service';
import {NgForm} from '@angular/forms';
import {Profile} from "./profile";

@Component({
    selector: 'profile',

    template: `
    <paper-dialog id="pdProfile"  class="size-position">
      <h2>New Profile</h2>
     
      <div >
         <form  #profileForm="ngForm">
          <div *ngIf="error">Check your user name or password</div>
           <div>
           <paper-input id="firstname" ngDefaultControl [(ngModel)]="profileSvr.pr.profile.firstname" name="firstname" required="true"
                   #firstname="ngModel" error-message="Invalide" label="First Name"></paper-input>
          </div>
            <div>
           <paper-input id="lastname" ngDefaultControl [(ngModel)]="profileSvr.pr.profile.lastname" name="lastname" required="true"
                   #lastname="ngModel" error-message="Invalide" label="Last name"></paper-input>
          </div>
          <div>
           <paper-input id="email" ngDefaultControl [(ngModel)]="profileSvr.pr.profile.email" name="email" required="true"
                   #email="ngModel" error-message="Invalide" label="Email"></paper-input>
          </div>
          <div>
            <paper-input id="pwd" ngDefaultControl [(ngModel)]="profileSvr.pr.profile.password" name="password" required="true"
                   #pwd="ngModel" type="password" label="Password"></paper-input>
          </div>
          
          <div >
            <paper-button raised on-click="newProfile()"   >submit</paper-button>
          </div>
        </form>
      </div>
    </paper-dialog>
  
  `
})
export class ProfileComponent implements OnInit{

    error: boolean = false;

    constructor(private profileSvr: ProfileService, private router:Router ) {

    }
    ngOnInit() {
        var pdProfile = <HTMLElement>document.querySelector('#pdProfile');
        pdProfile.open();
    }

    newProfile() {
        this.profileSvr.createProfile()
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