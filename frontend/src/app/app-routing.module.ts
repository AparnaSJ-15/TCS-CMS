import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'addpost',component:AddPostComponent},
  {path:'editpost',component:EditPostComponent},
  {path:'userlist',component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
