import showMessage from '../notification/notification'
import { UserRole } from './user';


export class URLLoader extends UserRole {


  constructor() {
    super()
  }

  show(title, message, type) {
    showMessage(title, message, type);
  }

  loadScripts() {
    const dynamicScripts = [
      '../../../assets/js/jquery-3.2.1.min.js',
      //'../../../assets/js/jquery-2.2.4.min.js',
      '../../../assets/js/popper.min.js',
      //'../../../assets/js/bootstrap.min.js',
      '../../../assets/js/bootstrap.bundle.js',
      /* '../../../assets/vendor/js-cookie/js.cookie.js',
       '../../../assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js',
       '../../../assets/vendor/jquery-scroll-lock/jquery-scrollLock.min.js',*/
      '../../../assets/js/jquery.dataTables.min2.js',
      //  '../../../assets/js/datatables.min1.js',
      '../../../assets/js/pdfmake.min.js',
      '../../../assets/js/vfs_fonts.js',
      // '../../../assets/js/datatables.min3.js',
      //'../../../assets/js/datatables.min.js',
      '../../../assets/js/tooltip.js',
      '../../../assets/js/init.js',
      '../../../assets/notification.js',
      //'../../../assets/vendor/chart.js/Chart.min.js',
      //'../../../assets/vendor/chart.js/Chart.extension.js',
    ];

    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('app-root')[0].appendChild(node);
    }
  }
}