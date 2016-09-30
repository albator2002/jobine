import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Login} from "./login";
import {Menu} from "./menu";
//import {NewAccount} from "./newaccount";

const appRoutes: Routes = [
    {
        path: '', component: Menu
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'menu',
        component: Menu
    }//,
    /*{
        path: 'newaccount',
        component: Menu  //todo : new account
    }*/
];
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);