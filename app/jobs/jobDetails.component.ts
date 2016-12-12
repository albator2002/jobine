/**
 * Created by Alain on 5/10/2016.
 */
// jobDetails.component.ts
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';
import {JobService} from './job.service';
import {NgForm} from '@angular/forms';
@Component({
    selector: 'jobDetails',

    template: `
    <div >
     <paper-dialog id="pdJob"  class="size-position" modal="true">
      <h2>New Job</h2>
     
      <div>
         <form  #jobForm="ngForm">
          
           <div>
           <paper-input id="name" ngDefaultControl [(ngModel)]="jobSvr.job.data.name" name="name" required="true"
                   #name="ngModel" error-message="Invalide" label="Name"></paper-input>
          </div>
          <paper-listbox id="lbType"  [(ngModel)]="jobSvr.job.data.type" name="type" required="true"
                   #type="ngModel" error-message="Invalide" label="Type">
            <paper-item  value="Reno">Reno</paper-item>
            <paper-item  value="Exterieur">Exterieur</paper-item>
          </paper-listbox>
          <div>
           <paper-input id="description" ngDefaultControl  [(ngModel)]="jobSvr.job.data.description" name="description" required="true"
                   #description="ngModel" error-message="Invalide" label="Description"></paper-input>
          </div>
          
          
          <div >
            <paper-button raised on-click="saveJob()"   >submit</paper-button>
          </div>
        </form>
      </div>
    </paper-dialog>
    </div>
  
  `
})
export class JobDetailsComponent implements OnInit{
    error: boolean = false;

    constructor(private jobSvr: JobService, private route:ActivatedRoute, private router:Router) {


    }
    ngOnInit() {
        this.initDialog();
    }

    initDialog(){
        let pdjob = <HTMLElement>document.querySelector('#pdJob');
        pdjob.open();

    }




    saveJob(){
        let lbType = <HTMLElement>document.querySelector('#lbType');
        this.jobSvr.job.data.type = lbType.selectedItem.attributes[3].value;
        if (this.jobSvr.job.id)
        {
            this.jobSvr.updateJob()
                .subscribe(

                    (job: any) => {

                        this.router.navigate([{outlets: {leftoutlet: 'menu',popupOutlet:'blank'}}]);

                    },
                    () => {
                        this.error = true;
                    }


                );
        }else {
            this.jobSvr.createJob()
                .subscribe(

                    (job: any) => {

                        this.router.navigate([{outlets: {leftoutlet: 'menu',popupOutlet:'blank'}}]);

                    },
                    () => {
                        this.error = true;
                    }

                );
        }
    }


}