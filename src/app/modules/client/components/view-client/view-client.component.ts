import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ClientTestService from 'src/app/main/mocks/ClientTestService';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {


  client
  constructor(private _router: Router,
    private clientTestService: ClientTestService) { }

  ngOnInit(): void {

    this.clientTestService.ID.subscribe(id => {
      this.client = this.clientTestService.get(parseInt(id))
    })
  }
}
