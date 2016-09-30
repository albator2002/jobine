/**
 * Created by Alain on 5/29/2016.
 */

// menu.ts
import {Component} from '@angular/core';



@Component({
    selector: 'menu',
    template: `
   <div>
    <div >
        <paper-listbox>
            <paper-item>Edit Profile</paper-item>
            <paper-item>Search</paper-item>
            <paper-item>My Jobines</paper-item>
            <paper-item>My Messages</paper-item>
            <paper-item>My bookmark</paper-item>
            <paper-item>Post Jobine</paper-item>
            <paper-item>About</paper-item>
        </paper-listbox>
      </div>
   </div>
  `
})

export class Menu {

}