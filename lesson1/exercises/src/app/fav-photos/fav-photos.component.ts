import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Milky photos';
  image1 = 'https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2562&q=80';
  image2 = 'https://images.unsplash.com/photo-1524240189020-77884edd5d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWlsa3l8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60';
  image3 = 'https://images.unsplash.com/photo-1630710601248-f310515aedf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60';

  constructor() { }

  ngOnInit() {
  }

}