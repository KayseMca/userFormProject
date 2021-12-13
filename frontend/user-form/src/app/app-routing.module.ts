import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentFormComponent } from './components/agent-form/agent-form.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'userform', component:UserFormComponent},
  {path:'agentform', component:AgentFormComponent},
  {path:'update',component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
