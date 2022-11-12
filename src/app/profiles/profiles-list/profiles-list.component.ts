import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Profile } from '../models/profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
})
export class ProfilesListComponent implements OnInit {

  profiles: Profile[] = [];
  @Output() selectEvent = new EventEmitter<Profile>();
  constructor(
    profileService: ProfileService,
    private toastr: ToastrService) {
    profileService.getProfiles().then((profiles) => {
      this.profiles = profiles;
    });
  }

  selectProfile(profile: Profile | undefined) {
    this.selectEvent.emit(profile);
    this.toastr.success('Profile selected', "Success");
  }

  ngOnInit(): void {
  }

}
