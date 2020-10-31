import { Component } from '@angular/core';
import { ListService } from './list/list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public ListService: ListService) { }

  ngOnInit() {
    this.ListService.getElements();
  }

  title = 'ToDo Angular';
}
