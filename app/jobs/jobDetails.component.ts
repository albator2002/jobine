/**
 * Created by Alain on 5/10/2016.
 */
// jobDetails.component.ts
import {Component} from '@angular/core';

@Component({
    selector: 'jobDetails',

    template: `
    <div >
     <paper-dialog id="pdJob"  class="size-position" >
      <h2>New Job</h2>
     
      <div>
         <form  #profileForm="ngForm">
          
           <div>
           <paper-input id="name" ngDefaultControl [(ngModel)]="jobSvr.job.data.name" name="name" required="true"
                   #name="ngModel" error-message="Invalide" label="Name"></paper-input>
          </div>
            <div>
          
          
          <div >
            <paper-button raised on-click="saveJob()"   >submit</paper-button>
          </div>
        </form>
      </div>
    </paper-dialog>
    </div>
  
  `
})
export class JobDetailsComponent {


    constructor() {


    }


}