import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  name = 'Task Board'
  lists = [{
    title: 'Todo',
    items: []
  }, {
    title: 'In Progress',
    items: []
  }, {
    title: 'Done',
    items: []
  }]

  constructor() {
  }

  ngOnInit() {
  }

  addList(listName) {
    this.lists.push({
      title: listName,
      items: []
    });
  }

  deleteList(event) {
    console.log(event);
    console.log(this.lists.indexOf(event))
  }
}
