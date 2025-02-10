import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', Validators.required)
    });
  }

  // Submit Form Data
  onSubmit() {
    if (this.userForm.valid) {
      console.log("Form Submitted Successfully!", this.userForm.value);
      alert("Form Submitted Successfully!");
    } else {
      alert("Invalid Form! Please fill all required fields.");
    }
  }

  //  Reset Form
  onCancel() {
    this.userForm.reset();
  }
}
