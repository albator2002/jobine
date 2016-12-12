/**
 * Created by Alain on 5/29/2016.
 */

// menu.component.ts
import {Component} from '@angular/core';
import { Router} from '@angular/router';



@Component({
    selector: 'menu',
    template: `
   <div>
    <div >
        <paper-listbox>
            <paper-item id="editProfile" on-click="editProfile()" >Edit Profile</paper-item>
            <paper-item>Search</paper-item>
            <paper-item>My Jobines</paper-item>
            <paper-item>My Messages</paper-item>
            <paper-item>My bookmark</paper-item>
            <paper-item on-click="newJob()">New Jobine</paper-item>
            <paper-item>About</paper-item>
        </paper-listbox>
      </div>
   </div>
  `
})

export class MenuComponent {

    constructor(private _router:Router ) {
    }

    editProfile(){
         this._router.navigate([{outlets: {popupOutlet: 'profile'}}]);

    }

    newJob(){
        this._router.navigate([{outlets: {popupOutlet: 'job'}}]);
    }
}