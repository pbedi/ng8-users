import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateComponent } from './users/create/create.component';

const routes: Routes = [
  {path:'', component:ListUsersComponent},
  {path:'create', component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
