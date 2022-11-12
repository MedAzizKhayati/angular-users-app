import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HiringService } from '../hiring.service';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile | null = null;

  constructor(
    public hiringService: HiringService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  hire() {
    if (this.profile) {
      this.hiringService.hireOrUnhireProfile(this.profile);
      if(this.hiringService.isProfileHired(this.profile)) {
        this.toastr.success('Profile hired', "Success");
      }else {
        this.toastr.success('Profile unhired', "Success");
      }
    }
  }

}
