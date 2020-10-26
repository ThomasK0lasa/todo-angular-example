import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  constructor(public ListService: ListService) { }

  ngOnInit() {
    this.ListService.refreshList();
  }

  onSelect(id : string) {
    this.ListService.updateElement(id);
  }

  onRemove(event, id : string) {
    this.ListService.removeElement(id);
    event.stopPropagation();
  }

  trackItem(item: any):any {
    return item._id;
  }

  checkIfDataExists(elements) {
    console.log(elements);
    if (elements.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
