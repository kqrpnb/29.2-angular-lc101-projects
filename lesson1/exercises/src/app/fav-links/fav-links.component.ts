import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ["https://www.unsplash.com", "https://what-if.xkcd.com", "https://pointerpointer.com"];

  constructor() { }

  ngOnInit() {
  }

}
