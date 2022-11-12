import { Component, OnInit } from '@angular/core';
import { HiringService } from '../hiring.service';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-hired-list',
  templateUrl: './hired-list.component.html',
})
export class HiredListComponent implements OnInit {

  profiles: Profile[] = [];
  constructor(private hiringService: HiringService) { }

  ngDoCheck() {
    this.profiles = this.hiringService.getHiredProfiles();
  }

  ngOnInit() {
  }

}
