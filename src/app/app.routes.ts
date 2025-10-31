import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'About',component:AboutComponent},
    {path:'Projects',component:ProjectsComponent},
    {path:'MyServices',component:MyServicesComponent},
    {path:'Contact',component:ContactComponent},
];

