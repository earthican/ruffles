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
    cards: [{
      title: 'Make Card Components editable'
    },{
      title: 'Finish Ruffles'
    }]
  }, {
    id: 1,
    title: 'In Progress',
    cards: [{
      title: 'Create Card Components'
    }]
  }, {
    id: 2,
    title: 'Done',
    cards: []
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
