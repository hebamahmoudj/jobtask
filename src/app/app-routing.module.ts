import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUsersComponent } from './components/home-users/home-users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeUsersComponent,title:'users'},
{path:'userdetails/:id',component:UserdetailsComponent,title:'details'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
