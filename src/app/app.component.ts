import { Component, OnInit } from "@angular/core";
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  now = '';
  todoName = '';
  todoList: todo[];

  constructor() {}

  ngOnInit() {
    this.todoList = [];
    this.showTime();
  };

  showTime(): void {
    this.now = moment().format('YYYY-MM-DD HH:mm:ss');
    setTimeout(() => this.showTime(),1000);
  }

  add(): void {
    if (!this.todoName) return;
    const _todo: todo = {
      id: uuidv4(),
      name: this.todoName,
      isDone: false,
    };
    this.todoList = [...this.todoList, _todo];
    this.todoName = '';
  };

  changeStatus(_id: string): void {
    this.todoList = this.todoList.map(e => e.id === _id ? {...e, isDone: !e.isDone} : e );
  };

  delete(_id: string): void {
    let _list = this.todoList.filter(x => x.id !== _id);
    this.todoList = _list;
  };

}

type todo = {
  id: string;
  name: string;
  isDone: boolean;
}
