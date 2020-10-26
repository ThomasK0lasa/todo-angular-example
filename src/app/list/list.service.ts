import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public elements;
  serverUrl = 'http://localhost:3001/v1/elements/';

  constructor(private http: HttpClient) { }

  getElements() {
    return this.http.get<any>(this.serverUrl);
  }

  refreshList() {
    this.getElements().subscribe(elements => { this.elements = elements});
  }

}
