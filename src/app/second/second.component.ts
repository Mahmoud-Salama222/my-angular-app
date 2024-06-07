import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second',
  
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  apiUrl = 'https://jsonplaceholder.typicode.com'; // Replace with your API URL

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
  
    });
  }

  onSubmit() {
    debugger;
    if (this.userForm.valid) {
      this.http.post(this.apiUrl, this.userForm.value).subscribe(
        response => {
          console.log('Form Submitted!', response);
          // Optionally, reset the form here
          this.userForm.reset();
        },
        error => {
          console.error('Error occurred:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
