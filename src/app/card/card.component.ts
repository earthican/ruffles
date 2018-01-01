import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CardDialogComponent } from '../card-dialog/card-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardModel: any;

  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.cardModel.newlyAdded) {
      setTimeout(() => {
        this.openCardDialog();
      });
      // this.openCardDialog(); // <-- returns ExpressionChangedAfterItHasBeenCheckedError!
      // For more details, check out https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
      delete this.cardModel.newlyAdded;
    }
  }

  openCardDialog() {
    let dialogRef = this.dialog.open(CardDialogComponent, {
      width: '85vw',
      height: '80vh',
      data: { card: this.cardModel }
    });
  }
}
