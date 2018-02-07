import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../chatService';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ChatService]
})
export class AppComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message: string;
  
  constructor(private chatService:ChatService) {}

  sendMessage(){
    if(this.message.length == 0) return;

    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
