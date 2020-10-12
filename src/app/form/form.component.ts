import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ListService } from '../list/list.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  serverUrl = 'http://localhost:3001/v1/elements/';
  task: string;

  constructor(private ListService: ListService, private http:HttpClient) {
    
  }

  ngOnInit(): void {}

  onSubmit() {
    const data = {element : this.task}
    console.log(data);
    this.http.post<any>(this.serverUrl, data).subscribe({
      next: data => {
        this.task = '';
        this.ListService.refreshList();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }
}
