import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PropositionTestService from 'src/app/main/mocks/PropositionTestService';

@Component({
  selector: 'app-view-proposition',
  templateUrl: './view-proposition.component.html',
  styleUrls: ['./view-proposition.component.css']
})
export class ViewPropositionComponent implements OnInit {

  proposition
  constructor(private _router: Router, private propositionTestService: PropositionTestService) { }

  ngOnInit(): void {

    this.propositionTestService.ID.subscribe(id => {
      this.proposition = this.propositionTestService.get(parseInt(id))
    })
  }

}
