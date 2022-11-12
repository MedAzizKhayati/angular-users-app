import { Injectable } from '@angular/core';
import { HiringService } from './hiring.service';
import { Profile } from './models/profile.model';
import { getMockProfiles } from './__mocks__/profiles';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profiles: Profile[] = [];

  async getProfiles(): Promise<Profile[]> {
    if (this.profiles.length === 0) {
      const profiles = await getMockProfiles();
      this.profiles = profiles;
    }
    return this.profiles;
  }

}
