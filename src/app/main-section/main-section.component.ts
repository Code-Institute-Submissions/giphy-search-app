import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
  photo = this.photo;

  constructor() {
    this.photo = './images/';

  }

  ngOnInit() {
  }

}
