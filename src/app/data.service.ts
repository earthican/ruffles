import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { List } from '../app/list/list';
import { LISTS } from './data/mock-data';

@Injectable()
export class DataService {
  private cardDeleteSource = new BehaviorSubject<number>(null);

  onCardDelete = this.cardDeleteSource.asObservable();

  constructor() { }

  deleteCard(cardId: number) {
    this.cardDeleteSource.next(cardId);
  }

  getLists(): Observable<List[]> {
    return of(LISTS);
  }
}