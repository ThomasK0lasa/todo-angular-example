import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public elements = [];
  serverUrl = 'http://localhost:3001/v1/elements/';

  constructor(private http: HttpClient) { }

  refreshList() {
    this.getElements().subscribe(elements => { this.elements = elements });
  }

  getElements() {
    return this.http.get<any>(this.serverUrl);
  }

  addElement(newtask: string) {
    const data = { element: newtask }
    console.log(data);
    this.http.post<any>(this.serverUrl, data).subscribe({
      next: data => {
        this.refreshList();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

  updateElement(id: string): void {
    const data = {element: id};
    this.http.put<any>(this.serverUrl+id, data).subscribe({
      next: data => {
        this.refreshList();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

  removeElement(id : string): void {
    this.http.delete(this.serverUrl+id).subscribe();
  }

}
