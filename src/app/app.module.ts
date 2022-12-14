import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { FormsModule } from '@angular/forms';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowColorDirective } from './mini-word/rainbow-color.directive';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesListComponent } from './profiles/profiles-list/profiles-list.component';
import { ProfileComponent } from './profiles/profile/profile.component';
import { ProfileCardComponent } from './profiles/profile-card/profile-card.component';
import { DefaultImagePipe } from './profiles/pipes/default-image.pipe';
import { HiredListComponent } from './profiles/hired-list/hired-list.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AddProfileComponent } from './profiles/add-profile/add-profile.component';
import { CyclingImageComponent } from './cycling-image/cycling-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    MiniWordComponent,
    RainbowColorDirective,
    DefaultImagePipe,
    HiredListComponent,
    NavbarComponent,
    ProfilesComponent,
    ProfileComponent,
    ProfileCardComponent,
    ProfilesListComponent,
    AuthenticationComponent,
    AddProfileComponent,
    CyclingImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
