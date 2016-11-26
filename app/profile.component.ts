/**
 * Created by Alain on 5/10/2016.
 */
// profile.component.ts
import {Component, OnInit} from '@angular/core';
import {  NgIf} from '@angular/common';
import {ActivatedRoute,Router } from '@angular/router';
import 'rxjs/add/operator/map';
import {ProfileService} from './profile.service';
import {NgForm} from '@angular/forms';
import {Profile} from "./profile";


@Component({
    selector: 'profile',

    template: `
    <div onfocus="initProfile()">
    <paper-dialog id="pdProfile"  class="size-position" >
      <h2>New Profile</h2>
     
      <div>
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
            <paper-button raised on-click="saveProfile()"   >submit</paper-button>
          </div>
        </form>
      </div>
    </paper-dialog>
    </div>
  
  `
})
export class ProfileComponent implements OnInit{

    error: boolean = false;

    constructor(private profileSvr: ProfileService, private route:ActivatedRoute, private router:Router) {


    }

    ngOnInit() {
        this.initProfile();
    }

    initProfile(){
        this.toggleProfile();

    }

    toggleProfile()
    {
        let pdProfile = <HTMLElement>document.querySelector('#pdProfile');
        pdProfile.toggle();
    }

    saveProfile(){
        //TODO: if profile.id do update
        if (this.profileSvr.pr.id)
        {
            this.profileSvr.updateProfile()
                .subscribe(
                    (token: any) => {

                        this.router.navigate([{outlets: {leftoutlet: 'menu',popupOutlet:'blank'}}]);

                    },
                    () => {
                        this.error = true;
                    }
                );
        }else {
            this.profileSvr.createProfile()
                .subscribe(
                    (token: any) => {
                        var btnLogin = <HTMLElement>document.querySelector('#btnLogin');
                        var btnNewAccount = <HTMLElement>document.querySelector('#btnNewAccount');
                        btnLogin.hidden = true;
                        btnNewAccount.hidden = true;

                        this.router.navigate([{outlets: {leftoutlet: 'menu',popupOutlet:'blank'}}]);

                    },
                    () => {
                        this.error = true;
                    }
                );
        }
    }
}