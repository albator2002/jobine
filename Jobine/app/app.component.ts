import {Component, OnInit} from "@angular/core";
import { Router} from '@angular/router';
import {Job} from "./job";
import {isLoggedin} from "./is-loggedin";
import {JobService} from "./job.service";


@Component({
    selector: 'jobine-comp',

    template: `
  <div> 
    <paper-drawer-panel >
        <paper-header-panel  drawer>
           <paper-toolbar>
            <paper-button active="!isLoggedin()"  on-click="userLogin()" id="btnLogin">login</paper-button>
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
    providers: [JobService,Router],

})



export class Jobine implements OnInit {

    constructor(private _jobService:JobService,private _router:Router ) {
    }
    jobList:Job[];
    lat:string;
    long:string;
    errorMessage:string;

    ngOnInit() {
        this.lat = "45.5602804";  //,-73.8516124
        this.long = "-73.8516124";

        var tabs =document.querySelector('paper-tabs');

        tabs.addEventListener('iron-select', function() {
           var pages = <'iron-pages'>document.querySelector('#pages');
            pages.select(this.selected);
        });
        this.getJobs();
    }

    getJobs() {
        this._jobService.getJobs()
            .subscribe(
                jobs => this.jobList = jobs,
                error => this.errorMessage = <any>error);
    }

    userLogin(){
        this._router.navigate(['Login']);
    }


}


