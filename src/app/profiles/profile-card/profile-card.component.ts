import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
})
export class ProfileCardComponent implements OnInit {
  @Input() profile: Profile | undefined = undefined;
  @Input() isHoverable = false;

  ngOnInit() {
  }

}
