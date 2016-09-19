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
          <paper-item>Offer</paper-item>
          <paper-item>Apply</paper-item>
        </paper-listbox>
      </div>
   </div>
  `
})

export class Menu {

}