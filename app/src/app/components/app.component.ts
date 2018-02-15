import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../chatService';
import { ApiService } from '../../shared/service/api.service'
import { Talk } from '../../shared/models/talk';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ChatService, ApiService]
})

export class AppComponent implements OnInit, OnDestroy {
  talks: Talk[] = [];
  connection;
  message: string;

  constructor(private chatService: ChatService, public apiService: ApiService) {

    this.loadTalks();
  }

  OnInit() {

  }

  loadTalks() {
    this.apiService.getMessages()
      .then(response => {
        if (response)
          this.talks = response;
      });
  }

  saveTalk(talk: Talk) {
    this.apiService.postMessage(talk)
      .then(response => {
        if (response) {
          talk.id = response;
          this.talks.push(talk);
        }
      });
  }

  sendMessage() {

    if (this.message.length == 0) return;

    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages()
      .subscribe(message => {
        if (message) {
          this.saveTalk({
            id: null,
            date: new Date(),
            user: "Henrique",
            message: this.message
          });
        }
      })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
