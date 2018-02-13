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
  }

  OnInit() {
    // fazer chamar API para salvar e carregar as mensagens

    this.talks = this.apiService.getMessages();
  }

  sendMessage() {

    if (this.message.length == 0) return;

    this.chatService.sendMessage(this.message);
    this.apiService.postMessage({
      id: "",
      date: new Date(),
      user: "Henrique",
      message: this.message
    });
    //se a mensagem for enviada, chamar api para salvar
    //salvar tbm data e usuario
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.talks.push({
        id: "",
        date: new Date(),
        user: "Henrique",
        message: message
      });
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
