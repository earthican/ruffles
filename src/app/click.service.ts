import { Injectable } from '@angular/core';

@Injectable()
export class ClickService {

  constructor() { }

  getClassListFromMouseEvent(mouseEvent) {
    return Object.values(mouseEvent.path).map(path => {
      if (path && path.classList)
        return path.classList.value.split(' ');
      return null;
    }).filter(classList => {
      return classList && classList.join(' ');
    }).reduce((a,b) => a.concat(b), []);
  }
}
