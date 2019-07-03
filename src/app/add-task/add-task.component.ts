import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public taskForm: FormGroup;  // Define FormGroup to student's form
 
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
  ) { }

 
  ngOnInit() {
    this.crudApi.GetItemsList();  // Call GetStudentsList() before main form is being called
    this.tasForm();              // Call student form when component is ready
  }

  // Reactive student form
  tasForm() {
    this.taskForm = this.fb.group({
      itemName: ['', [Validators.required, Validators.minLength(1)]],
      itemPrice: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Accessing form control using getters
  get firstName() {
    return this.taskForm.get('firstName');
  }

  get lastName() {
    return this.taskForm.get('lastName');
  }  

  get email() {
    return this.taskForm.get('email');
  }

  get mobileNumber() {
    return this.taskForm.get('mobileNumber');
  }

  // Reset student form's values
  ResetForm() {
    this.taskForm.reset();
  }  
 
  submitStudentData() {
    this.crudApi.AddItem(this.taskForm.value); // Submit student data using CRUD API
    this.ResetForm();  // Reset form when clicked on reset button
   }

}