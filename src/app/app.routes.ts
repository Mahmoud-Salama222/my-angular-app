import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './frist/frist.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'Navbar', redirectTo: '/' } ,
  { path: '', redirectTo: '/', pathMatch: 'full' } // Example default route
  // Example default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }