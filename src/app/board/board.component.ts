import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  name = 'Task Board'
  lists = [{
    id: 0,
    title: 'Todo',
    items: []
  }, {
    id: 1,
    title: 'In Progress',
    items: []
  }, {
    id: 2,
    title: 'Done',
    items: []
  }]
  lastId = 2

  constructor() {
  }

  ngOnInit() {
  }

  addList(listName) {
    this.lists.push({
      id: ++this.lastId,
      title: listName,
      items: []
    });
  }

  deleteList(event) {
    this.lists = this.lists.filter(_ => _.id !== event);
  }
}
