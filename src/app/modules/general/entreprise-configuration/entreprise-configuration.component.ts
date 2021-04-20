import { Component, OnInit } from '@angular/core';
import Company from 'src/app/main/configs/company';
import { URLLoader } from 'src/app/main/configs/loader';

@Component({
  selector: 'app-entreprise-configuration',
  templateUrl: './entreprise-configuration.component.html',
  styleUrls: ['./entreprise-configuration.component.css']
})
export class EntrepriseConfigurationComponent extends URLLoader implements OnInit {

  constructor() { super() }

  entreprise_config = {
    "company_name": Company.APP_COMPANY_NAME, "company_email": Company.APP_COMPANY_EMAIL,
    "time_zone": Company.APP_TIME_ZONE, "date_format": Company.APP_DATE_FOMMAT
  }
  ngOnInit(): void {
    super.loadScripts()
  }

}
