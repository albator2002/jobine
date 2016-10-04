System.register(['@angular/core', '@angular/router', './profile.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, profile_service_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            }],
        execute: function() {
            ProfileComponent = class ProfileComponent {
                constructor(profileSvr, router) {
                    this.profileSvr = profileSvr;
                    this.router = router;
                    this.error = false;
                }
                newProfile() {
                    this.profileSvr.createProfile()
                        .subscribe((token) => {
                        var btnLogin = document.querySelector('#btnLogin');
                        var btnNewAccount = document.querySelector('#btnNewAccount');
                        btnLogin.hidden = true;
                        btnNewAccount.hidden = true;
                        this.router.navigate(['/menu']);
                    }, () => { this.error = true; });
                }
            };
            ProfileComponent = __decorate([
                core_1.Component({
                    selector: 'profile',
                    template: `
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
  `
                }), 
                __metadata('design:paramtypes', [profile_service_1.ProfileService, router_1.Router])
            ], ProfileComponent);
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map