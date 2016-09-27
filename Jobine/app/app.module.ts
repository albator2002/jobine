import { NgModule,CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {HttpModule} from '@angular/http';
import { routing,appRoutingProviders }  from './app.routing';


//import { PolymerElement } from '@vaadin/angular2-polymer';
import {Authentication} from './authentication';
import {JobService} from "./job.service";
import {Jobine} from './app.component';
import {Login} from "./login";
import {Menu} from "./menu";


@NgModule({
    imports:      [ BrowserModule,FormsModule,HttpModule,routing],
    declarations: [ Jobine,Login,Menu
       // PolymerElement('paper-input'),
       //PolymerElement('paper-button'),
         ],
    providers: [ JobService,appRoutingProviders,Authentication ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap:    [ Jobine ]
})
export class AppModule { }