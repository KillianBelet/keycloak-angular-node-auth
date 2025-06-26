import { Routes } from '@angular/router';
import { Homepage } from './components/homepage/homepage.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: '', component: Homepage, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' } 

];
