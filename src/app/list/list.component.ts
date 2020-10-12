import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ListService } from './list.service';
import { List } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  serverUrl = 'http://localhost:3001/v1/elements/';

  constructor(private http: HttpClient, private listService: ListService) { }

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
}
