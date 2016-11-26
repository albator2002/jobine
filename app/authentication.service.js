System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', './profile.service', "./profile"], function(exports_1, context_1) {
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
    var core_1, http_1, profile_service_1, profile_1;
    var AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            }],
        execute: function() {
            AuthenticationService = class AuthenticationService {
                constructor(http, svrProfile) {
                    this.http = http;
                    this.api_URL = 'http://localhost:4711/api';
                    this.token = localStorage.getItem('token');
                    this.http = http;
                    this.svrProfile = svrProfile;
                }
                login(username, password) {
                    return this.http.post(this.api_URL + '/login', JSON.stringify({
                        username: username,
                        password: password
                    }), {
                        headers: new http_1.Headers({
                            'Content-Type': 'application/json'
                        })
                    })
                        .map((res) => {
                        let data = res.json();
                        this.svrProfile.pr = new profile_1.Profile(data._id, data.profile.firstname, data.profile.lastname, data.profile.email, data.profile.password);
                        this.token = data.profile.token;
                        localStorage.setItem('token', this.token);
                    });
                }
                logout() {
                    return this.http.get(this.api_URL + '/logout', {
                        headers: new http_1.Headers({
                            'x-security-token': this.token
                        })
                    })
                        .map((res) => {
                        this.token = undefined;
                        localStorage.removeItem('token');
                    });
                }
            };
            AuthenticationService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http, profile_service_1.ProfileService])
            ], AuthenticationService);
            exports_1("AuthenticationService", AuthenticationService); /**
             * Created by Alain on 5/10/2016.
             */
        }
    }
});
//# sourceMappingURL=authentication.service.js.map