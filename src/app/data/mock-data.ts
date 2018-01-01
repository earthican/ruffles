import { List } from '../list/list';

export const LISTS: List[] = [{
  id: 0,
  title: 'Todo',
  cards: [{
    id: 0,
    title: 'Make Card Components editable',
    description: 'We should be able to display and edit this text.'
  },{
    id: 1,
    title: 'Finish Ruffles',
    description: ''
  }]
}, {
  id: 1,
  title: 'In Progress',
  cards: [{
    id: 2,
    title: 'Create Card Components',
    description: ''    
  }]
}, {
  id: 2,
  title: 'Done',
  cards: []
}];
