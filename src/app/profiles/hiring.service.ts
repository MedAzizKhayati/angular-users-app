import { Injectable } from '@angular/core';
import { Profile } from './models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class HiringService {
  hiredProfiles: Profile[] = [];

  hireOrUnhireProfile(profile: Profile) {
    const index = this.hiredProfiles.indexOf(profile);
    if (index > -1) {
      this.hiredProfiles.splice(index, 1);
    } else {
      this.hiredProfiles.push(profile);
    }
  }

  getHiredProfiles(): Profile[] {
    return this.hiredProfiles;
  }

  isProfileHired(profile: Profile | null): boolean {
    if (!profile) {
      return false;
    }
    return this.hiredProfiles.includes(profile);
  }
}
