System.register(['@angular/core', '@angular/router', './authentication.service'], function(exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            LoginComponent = class LoginComponent {
                constructor(auth, router) {
                    this.auth = auth;
                    this.router = router;
                    this.error = false;
                    this.username = "";
                    this.password = "";
                }
                login() {
                    this.auth.login(this.username, this.password)
                        .subscribe((token) => {
                        var btnLogin = document.querySelector('#btnLogin');
                        var btnNewAccount = document.querySelector('#btnNewAccount');
                        btnLogin.hidden = true;
                        btnNewAccount.hidden = true;
                        this.router.navigate(['/menu']);
                    }, () => { this.error = true; });
                }
            };
            LoginComponent = __decorate([
                core_1.Component({
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
                }), 
                __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map