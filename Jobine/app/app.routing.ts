import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Login} from "./login";
import {Menu} from "./menu";

const appRoutes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'Menu',
        component: Menu
    }
];