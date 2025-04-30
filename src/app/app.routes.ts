import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Punto1Component } from './components/public/punto1/punto1.component';
import { Punto2Component } from './components/public/punto2/punto2.component';
import { Punto3Component } from './components/public/punto3/punto3.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'punto1', component: Punto1Component},
    {path:'punto2', component: Punto2Component},
    {path:'punto3', component: Punto3Component},
    {path:'**', pathMatch: 'full', redirectTo: 'home'}
];
