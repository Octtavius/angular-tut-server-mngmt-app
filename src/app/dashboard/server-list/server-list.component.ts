import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../shared/server-model.model';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {

  @Input() newServer: string;

  servers: Server[] = [
    new Server('server 1', 'offline')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addServer(server) {
    console.log("received from parentserver: " + server);
    this.servers.push(new Server(server, 'offline'));
  }

}
