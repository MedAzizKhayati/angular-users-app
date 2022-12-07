import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { AddProfileDto } from '../dto/add-profile.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
})
export class AddProfileComponent implements OnInit {

  constructor(
    private readonly profileService: ProfileService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: AddProfileDto) {
    this.profileService.addProfile(form);
    this.router.navigate(['/users']);
  }
}
