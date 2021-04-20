import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import Link from 'src/app/main/configs/link';
import { URLLoader } from 'src/app/main/configs/loader';

@Component({
  selector: 'app-system-configuration',
  templateUrl: './system-configuration.component.html',
  styleUrls: ['./system-configuration.component.css']
})
export class SystemConfigurationComponent extends URLLoader implements OnInit {

  systemeConfiguration = {
    "currency": Constant.APP_CURRENCY, "user_register": Constant.USER_REGISTER,
    "footer": Constant.APP_FOOTER,
    "url": Link.BACKEND_URL, "technology": Link.BACKEND_TECHNOLOGY, "port": Link.BACKEND_PORT,
    "language": Constant.USER_LANGUAGE
  }
  constructor() { super() }


  ngOnInit(): void {
    super.loadScripts()
  }

}
