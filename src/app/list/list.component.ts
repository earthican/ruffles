import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() name: string
  @Input() isAddListButton: boolean = false

  @Output() onInputEnter: EventEmitter<any> = new EventEmitter();

  static readonly ADD_LIST_NAME = '+ Add List';

  editing = false
  onAddList = new EventEmitter<boolean>()

  constructor() {
  }

  ngOnInit() {
    if (this.isAddListButton) this.name = ListComponent.ADD_LIST_NAME;
  }

  onClick() {
    this.editing = true;
    if (this.isAddListButton) this.name = '';
  }

  onEnter() {
    this.onInputEnter.emit(this.name);
    this.editing = false;
    if (this.isAddListButton) this.name = ListComponent.ADD_LIST_NAME;
  }

}
