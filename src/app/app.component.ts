import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm!: FormGroup; // Declare the form group
  forbiddenUserNames = ['Chris', 'John']; // Corrected variable name and array

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form using FormBuilder
    this.signupForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        username: [null, [Validators.required, this.forbiddenNameValidator.bind(this)]], // Use custom validator function
        email: [null, [Validators.required, Validators.email]], // Email form control with required and email validators
      }),
      gender: ['male'], // Gender form control with initial value 'male'
      hobbies: this.formBuilder.array([]), // Initialize hobbies as a form array
    });
  }

  // Getter to access hobbies form array
  get hobbies(): FormArray {
    return this.signupForm.get('hobbies') as FormArray;
  }

  // Method to add a hobby form control to the hobbies form array
  addHobby(): void {
    this.hobbies.push(this.formBuilder.control(null, Validators.required));
    // Add a new hobby form control with required validator
  }

  // Custom validator function to check if username is forbidden
  forbiddenNameValidator(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUserNames.includes(control.value)) {
      return { 'nameForbidden': true }; // Return an error object if username is forbidden
    }
    return null; // Return null if username is allowed
  }

    // Helper method to cast AbstractControl to FormControl
    castToFormControl(control: AbstractControl): FormControl {
      return control as FormControl; // Cast AbstractControl to FormControl
    }

  // Form submission handler
  SubmitForm(): void {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value); // Log form value when valid
      // You can submit the form data to your backend or perform other actions here
    } else {
      console.log("Form is invalid"); // Log message when form is invalid
    }
  }
}
