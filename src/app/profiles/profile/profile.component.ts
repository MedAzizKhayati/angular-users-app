import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HiringService } from '../hiring.service';
import { Profile } from '../models/profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile | null = null;
  private subscription: Subscription;
  constructor(
    public hiringService: HiringService,
    private profileService: ProfileService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.profile = this.profileService.getProfile(id) || null;
      this.profileService.invokeProfileChange.subscribe(() => {
        const profile = this.profileService.getProfile(id);
        if (profile) {
          this.profile = profile;
        } else {
          this.router.navigate(['/users']);
        }
      });
    });
  }

  ngOnInit() {
  }

  hire() {
    if (this.profile) {
      this.hiringService.hireOrUnhireProfile(this.profile);
      if (this.hiringService.isProfileHired(this.profile)) {
        this.toastr.success('Profile hired', "Success");
      } else {
        this.toastr.success('Profile unhired', "Success");
      }
    }
  }

  delete() {
    if (this.profile) {
      this.profileService.removeProfile(this.profile);
      this.toastr.success('Profile deleted', "Success");
      // this.router.navigate(['/users']);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
