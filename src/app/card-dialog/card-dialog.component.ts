import { Component, OnInit, Inject, Input, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CardComponent } from '../card/card.component';
import { DataService } from '../data.service';
import { ClickService } from '../click.service';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {

  static readonly CARD_DIALOG_TITLE_CLASS = 'card-dialog-title';
  static readonly CARD_DIALOG_DESCRIPTION_CLASS = 'card-dialog-description';

  editingTitle: boolean = false;
  editingDescription: boolean = false;
  cardModelRef: any;
  lastSavedCardState: any;

  constructor(
    public dialogRef: MatDialogRef<CardDialogComponent>,
    private dataService: DataService,
    private clickService: ClickService,
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

  cancelDescriptionEdits() {
    this.cardModelRef.description = this.lastSavedCardState.description;
    this.editingDescription = false;
  }

  deleteMe() {
    this.dataService.deleteCard(this.data.card.id);
    this.dialogRef.close();
  }

  @HostListener('document:click', ['$event'])
  closeEditsOnOffClick(event) {
    const targetClassesList = this.clickService.getClassListFromMouseEvent(event);

    if (!targetClassesList.includes(CardDialogComponent.CARD_DIALOG_TITLE_CLASS) &&
      this.editingTitle) {
      this.editingTitle = false;
    }

    if (!targetClassesList.includes(CardDialogComponent.CARD_DIALOG_DESCRIPTION_CLASS) &&
      this.editingDescription) {
      this.cancelDescriptionEdits();
    }
  }

  private saveState(cardModel) {
    this.cardModelRef = cardModel;
    this.lastSavedCardState = { ...cardModel };
  }
}
