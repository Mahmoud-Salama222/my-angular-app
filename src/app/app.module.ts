import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FristComponent } from './frist/frist.component';
import { SecondComponent } from './second/second.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FristComponent,
    SecondComponent,
  
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
