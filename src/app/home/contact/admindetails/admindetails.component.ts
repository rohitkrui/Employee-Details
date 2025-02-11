import { Component,  OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AdminservicesService } from '../adminservices.service';


@Component({
  selector: 'app-admindetails',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm!: FormGroup;
  submittedData: any = null; // Store submitted form data
  formInvalidMessage: string = ''; // Store invalid form message

  constructor(private formService: AdminservicesService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // ✅ Initialize Form with Validation
  initializeForm(): void {
    this.userForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$') // At least one letter and one number
      ]),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      hobbies: new FormArray([])
    });

    // ✅ Listen for Form Changes
    this.userForm.valueChanges.subscribe(value => {
      console.log('Form Changed:', value);
    });
  }

  // ✅ Getter for Hobbies FormArray
  get hobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  // ✅ Safe way to get FormControl for hobbies
getHobbyControl(index: number): FormControl {
  return this.hobbies.at(index) as FormControl;
}

  

  // ✅ Add Hobby Dynamically
  addHobby(): void {
    this.hobbies.push(new FormControl('', Validators.required));
  }

  // ✅ Form Submission
  onSubmit(): void {
    if (this.userForm.valid) {
      this.submittedData = this.userForm.value; // Store form data for display
      this.formInvalidMessage = ''; // Clear any error message
      console.log('Form Submitted:', this.submittedData);
    } else {
      this.submittedData = null; // Clear previous data
      this.formInvalidMessage = '❌ Invalid Form! Please correct the errors.'; // Show error message
      this.userForm.markAllAsTouched(); // Show errors immediately
    }
  }
}

