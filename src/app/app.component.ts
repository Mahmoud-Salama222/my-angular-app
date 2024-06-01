import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',


  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  f() {
    this.navigate('first');
  }

  f1() {
    this.navigate('second');
  }

  navigate(path: string) {
    window.location.href = `/${path}`;
  }
}