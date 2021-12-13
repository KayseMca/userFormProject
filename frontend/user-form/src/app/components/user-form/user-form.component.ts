import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user-service.service';

let error_messages = {
  exist:{
    email:'this Email already used, try again or Update',
    username:'The UserName already taken'
  },
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  indoors = [
    'FishKeeping',
    'Reading',
    'Boxing',
    'Gaming',
    'Other'
  ]
  outdoors = [
    'Football',
    'Swimming',
    'fishing',
    'Climbing',
    'Clyling',
    'Other'
  ]
  isSubmitted:Boolean = false
  userForm:FormGroup
  constructor(private fg:FormBuilder, private userService:UserServiceService) { 

    this.userForm = this.fg.group({
      userName : new FormControl('',Validators.compose([Validators.required, Validators.minLength(3)])),
      lastName : new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email : new FormControl('',Validators.compose([Validators.required, Validators.email])),
      telefon: new FormControl('', Validators.compose([Validators.required, Validators.min(8)])),
      description: new FormControl(''),
      additional: new FormControl(''),
      interests: new FormControl('')
    })
  }

  ngOnInit(): void {

  }

  createUser(){
    if(this.userForm.valid){
      this.isSubmitted = true
      this.userService.createUser(this.userForm.value).subscribe(es=>{
        alert('created new User!')
      })
    } 
  }

  
  
}
