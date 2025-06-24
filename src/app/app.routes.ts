import { Routes } from '@angular/router';
import { LandingComponent } from './dashboard/components/landing/landing.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: LandingComponent }
];
