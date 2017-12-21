import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  host: {
    '(document:click)': 'closeAddListInput($event)',
  }
})
export class ListComponent implements OnInit {

  @Input() name: string = ''
  @Input() isAddListButton: boolean = false
  @Input() id: number = -1
  @Input() cards: Array<Object> = []

  @Output() onInputEnter: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  static readonly ADD_LIST_NAME = '+ Add List';

  editing = false
  onAddList = new EventEmitter<boolean>()

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    if (this.isAddListButton) this.name = ListComponent.ADD_LIST_NAME;
  }

  onClick() {
    this.editing = true;
    if (this.isAddListButton) this.name = '';
  }

  onMenuButtonClick(event) {
    event.stopPropagation();
  }

  onEnter() {
    this.onInputEnter.emit(this.name);
    this.editing = false;
    if (this.isAddListButton) this.name = ListComponent.ADD_LIST_NAME;
  }

  deleteMe() {
    console.log('need alert to confirm first')
    this.onDelete.emit(this.id);
  }

  closeAddListInput(event) {
    if (event.target.contains(this.elementRef.nativeElement)) {
      this.editing = false;
      if (this.isAddListButton) this.name = ListComponent.ADD_LIST_NAME;
    }
  }
}
