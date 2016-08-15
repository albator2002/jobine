/**
 * Created by Alain on 4/26/2016.
 */
System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var JobService;
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
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            let JobService = class JobService {
                constructor(http) {
                    this.http = http;
                    this._jobineUrl = 'http://localhost:4711/api/jobs';
                    this.http = http;
                }
                getJobs() {
                    return this.http.get(this._jobineUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                extractData(res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    let body = res.json();
                    return body || {};
                }
                handleError(error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    let errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                }
            };
            JobService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], JobService);
            exports_1("JobService", JobService);
        }
    }
});
//# sourceMappingURL=job.service.js.map