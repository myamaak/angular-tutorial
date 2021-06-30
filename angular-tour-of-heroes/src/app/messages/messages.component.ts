import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}
  //messageService 프로퍼티는 템플릿에 바인딩 되기 때문에 public으로 선언한다. (public일때만 바인딩이 가능하다)

  ngOnInit(): void {
  }

}
