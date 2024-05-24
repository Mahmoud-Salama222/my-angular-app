// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FristComponent } from './frist/frist.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
  { path: 'frist', component: FristComponent },
  { path: 'second', component: SecondComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
