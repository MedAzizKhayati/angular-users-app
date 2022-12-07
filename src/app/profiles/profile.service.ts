import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AddProfileDto } from './dto/add-profile.dto';
import { Profile } from './models/profile.model';
import { getMockProfiles } from './__mocks__/profiles';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profiles: Profile[] = [];

  public invokeProfileChange: Subject<boolean> = new Subject();


  constructor() {
    getMockProfiles().then(
      profiles => {
        this.profiles = profiles;
        this.invokeProfileChange.next(true);
      }
    )
  }

  getProfiles(): Profile[] {
    return this.profiles;
  }

  getProfile(id: string) {
    return this.profiles.find(profile => profile.id == id);
  }

  addProfile(profile: AddProfileDto) {
    const newId = +(this.profiles.at(-1)?.id || 0) + 1;
    this.profiles.push(new Profile(
      newId.toString(),
      profile.firstname,
      profile.lastname,
      profile.age,
      profile.job,
      ""
    ));
    this.invokeProfileChange.next(true);
  }

  removeProfile(profile_: Profile) {
    this.profiles = this.profiles.filter(profile => profile.id != profile_.id);
    this.invokeProfileChange.next(true);
  }

}
