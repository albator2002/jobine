/**
 * Created by Alain on 2016-10-06.
 */
// job.component.ts
import {Component, OnInit} from '@angular/core';
import {  NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Job} from "./job";
import {isLoggedin} from "../is-loggedin";
import {JobService} from "./job.service";

@Component({

    selector: 'job-component',


    template: `
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
                <google-map-marker *ngFor="let marker of jobList" latitude="{{marker.data.location.latitude}}" longitude="{{marker.data.location.longitude}}" title="{{marker.data.name}}"></google-map-marker>
            </google-map>
          </div>
          <div id="listJob">
          <li *ngFor="let marker of jobList"  title="{{marker.data.name}}">Name: {{marker.data.name}} description: {{marker.data.description}} </li>
          </div>                 
        </iron-pages>
    
        <paper-toolbar id="footToolbar">
                <paper-button toggles class="fancy" >Switch places</paper-button>
        </paper-toolbar>
    </section>
  `,
    providers: [JobService],
})
export class JobComponent implements OnInit {

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

}