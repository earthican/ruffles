import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  cols = "12";

  items = [{
    text: 'Boards',
    cols: 1,
    rows: 1,
    button: {
      onclick: this.log
    }
  }, {
    text: 'Ruffles',
    cols: 9,
    rows: 1
  }, {
    text: 'Profile',
    cols: 2,
    rows: 1,
    button: {
      onclick: this.log
    }
  },];

  constructor() {}

  ngOnInit() {
  }

  log() {
    console.log('hi!');
  }
}
