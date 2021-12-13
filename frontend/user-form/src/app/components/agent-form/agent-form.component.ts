import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-agent-form',
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.css']
})
export class AgentFormComponent implements OnInit {

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
  agentForm:FormGroup
  constructor(private fg:FormBuilder) { 

    this.agentForm = this.fg.group({
      userName : new FormControl('',Validators.compose([Validators.required, Validators.minLength(3)])),
      lastName : new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email : new FormControl('',Validators.compose([Validators.required, Validators.email])),
      telefon: new FormControl('', Validators.compose([Validators.required, Validators.min(8)])),
      description: new FormControl(''),
      additional: new FormControl(''),
      interests: new FormControl(''),
      company: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {

    console.log("test")
  }

  createAgent(){
    this.isSubmitted = true
    if(this.agentForm.valid) console.log(this.agentForm.value)
  }
}
