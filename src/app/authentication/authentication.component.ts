import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log("🚀 ~ file: authentication.component.ts ~ line 16 ~ AuthenticationComponent ~ onSubmit ~ form", form)
  }

  onChange(form: NgForm) {
    console.log("🚀 ~ file: authentication.component.ts ~ line 21 ~ AuthenticationComponent ~ onChange ~ event", form)
  }

}
