System.register(["@angular/core", '@angular/router', "./job.service"], function(exports_1, context_1) {
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
    var core_1, router_1, job_service_1;
    var Jobine;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            }],
        execute: function() {
            Jobine = class Jobine {
                constructor(_jobService, _router) {
                    this._jobService = _jobService;
                    this._router = _router;
                }
                ngOnInit() {
                    this.lat = "45.5602804"; //,-73.8516124
                    this.long = "-73.8516124";
                    var tabs = document.querySelector('paper-tabs');
                    tabs.addEventListener('iron-select', function () {
                        var pages = document.querySelector('#pages');
                        pages.select(this.selected);
                    });
                    this.getJobs();
                }
                getJobs() {
                    this._jobService.getJobs()
                        .subscribe(jobs => this.jobList = jobs, error => this.errorMessage = error);
                }
                userLogin() {
                    this._router.navigate(['/login']);
                }
                newAccount() {
                    //this._router.navigate(['/newaccount']);
                }
            };
            Jobine = __decorate([
                core_1.Component({
                    selector: 'jobine-comp',
                    template: `
  <div> 
    <paper-drawer-panel >
        <paper-header-panel  drawer>
           <paper-toolbar>
            <paper-button active="!isLoggedin()"  on-click="userLogin()" id="btnLogin">Login</paper-button>
             <paper-button active="!isLoggedin()"  on-click="newAccount()" id="btnLAccount">New Account</paper-button>
           </paper-toolbar>
           <router-outlet></router-outlet>
        </paper-header-panel>

        <paper-header-panel id="mainPanel" main>
            <paper-toolbar id="mainToolbar">
                <paper-icon-button icon="menu" paper-drawer-toggle></paper-icon-button>
                <paper-tabs selected="0">
                    <paper-tab>MAP</paper-tab>
                    <paper-tab>LIST</paper-tab>
                </paper-tabs>  
                
             </paper-toolbar> 
            <section id="section">             
                <iron-pages id="pages" selected="0">
            
                  <div>  
                    <google-map latitude="{{lat}}" longitude="{{long}}" disableDefaultUI >
                        <google-map-marker *ngFor="let marker of jobList" latitude="{{marker.job.location.latitude}}" longitude="{{marker.job.location.longitude}}" title="{{marker.job.name}}"></google-map-marker>
                    </google-map>
                  </div>
                  <div id="listJob">
                  <li *ngFor="let marker of jobList"  title="{{marker.job.name}}">Name: {{marker.job.name}} description: {{marker.job.description}} </li>
                  </div>                 
                </iron-pages>
                <paper-toolbar id="footToolbar">
                    <paper-button toggles class="fancy" on-click="getJobs()" >Switch places</paper-button>
                </paper-toolbar>
            </section>

        </paper-header-panel>
    </paper-drawer-panel>
   
</div>
  `,
                    providers: [job_service_1.JobService],
                }), 
                __metadata('design:paramtypes', [job_service_1.JobService, router_1.Router])
            ], Jobine);
            exports_1("Jobine", Jobine);
        }
    }
});
//# sourceMappingURL=app.component.js.map