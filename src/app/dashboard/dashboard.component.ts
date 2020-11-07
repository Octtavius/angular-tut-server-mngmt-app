import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { ServerListComponent } from './server-list/server-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';

  @ViewChild(ServerListComponent) child: ServerListComponent;

  constructor(private route: ActivatedRoute, private backend: BackendService) { 
    route.params.subscribe((param) => {
      console.log(param)
    })
  }

  ngOnInit(): void {
  }

  addServer(serverName) {
    this.child.addServer(serverName);
  }

  backendCall() {
    this.backend.makeRequest("https://demo3152261.mockable.io/hello")
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
}
