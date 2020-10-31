import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public elements = [];
  public canConnect = null;
  serverUrl = 'http://localhost:3001/v1/elements/';

  constructor(private http: HttpClient) { }

  getElements() {
    return this.http.get<any>(this.serverUrl).subscribe({
      next: data => {
        this.elements = data
        this.canConnect = true;
      },
      error: error => {
        this.canConnect = false;
        console.error("Can't connect to DB server");
        throw error;
      }
    });
  }

  addElement(newtask: string) {
    const data = { element: newtask }
    this.http.post<any>(this.serverUrl, data).subscribe({
      next: data => {
        this.getElements();
      },
      error: error => {
        console.error('addElement Error', error);
        throw error;
      }
    })
  }

  updateElement(id: string): void {
    const data = { element: id };
    this.http.put<any>(this.serverUrl + id, data).subscribe({
      next: data => {
        this.getElements();
      },
      error: error => {
        console.error('updateElement Error', error);
        throw error;
      }
    })
  }

  removeElement(id: string): void {
    this.http.delete(this.serverUrl + id).subscribe({
      next: data => {
        this.getElements();
      },
      error: error => {
        console.error('removeElement Error', error);
        throw error;
      }
    });
  }

}
