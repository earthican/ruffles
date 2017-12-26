import { Component, OnInit, Inject, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {

  editingTitle: boolean = false;
  editingDescription: boolean = false;
  cardModelRef: any;
  lastSavedCardState: any;

  constructor(
    public dialogRef: MatDialogRef<CardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.dialogRef.afterClosed().subscribe(_ => {
        if (this.editingDescription && this.lastSavedCardState) {
          this.cardModelRef.description = this.lastSavedCardState.description;
        }
        if (this.editingTitle && this.lastSavedCardState) {
          this.cardModelRef.title = this.lastSavedCardState.title;
        }
      });
    }

  ngOnInit() {
  }

  editDescription(cardModel) {
    this.saveState(cardModel);
    this.editingDescription = true;
  }

  cancelDescriptionEdits(cardModel) {
    cardModel.description = this.lastSavedCardState.description;
    this.editingDescription = false;
  }

  private saveState(cardModel) {
    this.cardModelRef = cardModel;
    this.lastSavedCardState = { ...cardModel };
  }
}
