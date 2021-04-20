import { Component, OnInit } from '@angular/core';
import ClientTestService from 'src/app/main/mocks/ClientTestService';

@Component({
  selector: 'app-client-grid',
  templateUrl: './client-grid.component.html',
  styleUrls: ['./client-grid.component.css']
})
export class ClientGridComponent implements OnInit {
  clients$

  constructor(private clientTestService: ClientTestService) { }

  ngOnInit(): void {
    this.getAllMock()
  }

  getAllMock() {
    this.clients$ = this.clientTestService.getAll()
  }
}
