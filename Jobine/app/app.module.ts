import { NgModule,CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';
//import { PolymerElement } from '@vaadin/angular2-polymer';
import {JobService} from "./job.service";
import {Jobine} from './app.component';
@NgModule({
    imports:      [ BrowserModule,FormsModule,HttpModule,RouterModule],
    declarations: [ Jobine,
       // PolymerElement('paper-input'),
       //PolymerElement('paper-button'),
         ],
    providers: [ JobService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap:    [ Jobine ]
})
export class AppModule { }