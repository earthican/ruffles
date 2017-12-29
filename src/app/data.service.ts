import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private cardDeleteSource = new BehaviorSubject<number>(null);

  onCardDelete = this.cardDeleteSource.asObservable();

  constructor() { }

  deleteCard(cardId: number) {
    this.cardDeleteSource.next(cardId);
  }
}