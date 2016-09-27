import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Login} from "./login";
import {Menu} from "./menu";

const appRoutes: Routes = [
    {
        path: '', component: Menu
    },
    {
        path: 'Login',
        component: Login
    },
    {
        path: 'Menu',
        component: Menu
    }
];
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);