import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CardDialogComponent } from '../card-dialog/card-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardModel: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCardDialog() {
    let dialogRef = this.dialog.open(CardDialogComponent, {
      width: '85vw',
      height: '80vh',
      data: { card: this.cardModel }
    });
  }
}
