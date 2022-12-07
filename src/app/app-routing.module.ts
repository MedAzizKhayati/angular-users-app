import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { AddProfileComponent } from './profiles/add-profile/add-profile.component';
import { ProfileComponent } from './profiles/profile/profile.component';
import { ProfilesComponent } from './profiles/profiles.component';

export const routes: Routes = [
  {
    path: 'users', component: ProfilesComponent, title: 'Users', children: [
      { path: ':id', component: ProfileComponent },
    ]
  },
  { path: 'word', component: MiniWordComponent, title: 'Word' },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent, title: "Login" },
  { path: 'profile/new', component: AddProfileComponent, title: 'New Profile' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
