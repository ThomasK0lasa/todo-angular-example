import { Component } from '@angular/core';
import { ListService } from '../list/list.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  task: string;

  constructor(private ListService: ListService) {

  }

  onSubmit() {
    this.ListService.addElement(this.task);
    this.task = '';
  }
}
