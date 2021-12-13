import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { find } from 'rxjs';
import { UserServiceService } from 'src/app/service/user-service.service';
import { AgentUser } from 'src/app/_interfaces/_agentUser';
import { User } from 'src/app/_interfaces/_user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  submitted:boolean = false
  userFound!: User | AgentUser|any;
  users:User[]=[]
  validForm:boolean = false
  userEmail:FormControl = new FormControl('' ,Validators.required)

  constructor(private userService:UserServiceService) { 
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe((res:User[])=>{
      this.users = res
    })
  }

  findUser(){
    this.submitted = true
    if(this.valid()){
      
      let find = this.users.find(user=>user.email===this.userEmail.value)
    this.userFound = find?find:{}
    } 
    
  }


  valid(){
    return this.userEmail.valid
  }

  deleteUser(){
    this.userService.deleteUser(this.userFound.id).subscribe(val=>{
      console.log("Deleted..")
      this.userFound = {}
      this.userEmail.reset()
      this.userService.getAll().subscribe((res:User[])=>{
        this.users = res
      })
    })
    
  }
}
