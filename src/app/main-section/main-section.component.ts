import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],

})
export class MainSectionComponent {
  title = 'Welcome to GiphySearch';
  link = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  http: Http;
  giphies = [];

  constructor(http: Http) {
    this.http = http;
  }

  performSearch(searchTerm: HTMLInputElement): void {
    const apiLink = this.link + searchTerm.value;

    this.http.request(apiLink)
      .subscribe((res: Response) => {
        this.giphies = res.json().data;
        console.log(this.giphies);
      });
  }
};
