import { Component, OnInit } from '@angular/core';
import { Club } from '../club';
import { CLUBS } from '../mock-clubs';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  clubs = CLUBS;
  selectedClub: Club;

  constructor() { }

  ngOnInit() {
  }

  onSelect(club: Club): void {
    this.selectedClub = club;
  }
}
