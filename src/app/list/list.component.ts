import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { ClickService } from '../click.service';
import { DragulaService } from 'ng2-dragula';

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
  static readonly LIST_TITLE_CLASS = 'list-title'

  editing = false
  onAddList = new EventEmitter<boolean>()

  constructor(
    private elementRef: ElementRef,
    private clickService: ClickService) {
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
    const targetClassesList = this.clickService.getClassListFromMouseEvent(event);

    if (!targetClassesList.includes(ListComponent.LIST_TITLE_CLASS)) {
      this.editing = false;
      if (this.isAddListButton) this.name = ListComponent.ADD_LIST_NAME;
    }
  }

  updateCardContent(event, card) {
    card.title = event.title;
  }
}
