import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  name = 'Task Board'
  lists = []
  lastId = 2

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getLists().subscribe(lists => {
      this.lists = lists
    });
  }

  addList(listName) {
    this.lists.push({
      id: ++this.lastId,
      title: listName,
      cards: []
    });
  }

  deleteList(event) {
    this.lists = this.lists.filter(_ => _.id !== event);
  }
}
