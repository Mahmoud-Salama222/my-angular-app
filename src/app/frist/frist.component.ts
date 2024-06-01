import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './frist.component.html',
  styleUrls: ['./frist.component.css']
})
export class FirstComponent implements OnInit {

  ngOnInit() {
    console.log('FirstComponent initialized!');
  }
}