import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CardDialogComponent } from '../card-dialog/card-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  editCard() {
    console.log('editCard')
    let dialogRef = this.dialog.open(CardDialogComponent, {
      width: '250px',
      data: { title: this.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title = result;
    });
  }

}
