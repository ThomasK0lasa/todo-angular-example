import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  serverUrl = 'http://localhost:3001/v1/elements/';

  constructor(private http: HttpClient, public listService: ListService) { }

  ngOnInit() {
    this.listService.refreshList();
  }

  onSelect(id : string) {
    const data = {element: id};
    this.http.put<any>(this.serverUrl+id, data).subscribe({
      next: data => {
        this.listService.refreshList();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

  onRemove(id : string) {
    this.removeElement(id);
  }

  removeElement(id : string): void {
    this.http.delete(this.serverUrl+id).subscribe();
  }

  trackItem(item: any):any {
    return item._id;
  }

  checkIfDataExists(elements) {
    if (elements != undefined && elements.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
