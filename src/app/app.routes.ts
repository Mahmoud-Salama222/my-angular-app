import { Routes } from '@angular/router';
import { FristComponent } from './frist/frist.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
  { path: 'first', component: FristComponent },
  { path: 'second', component: SecondComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' } // Example default route
]