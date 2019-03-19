import { Component, Injector, OnInit } from '@angular/core';
import { JhkimserviceService } from 'src/jhkimservice.service';

@Component({
  selector: 'default-component',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  constructor(private data: JhkimserviceService, private injector: Injector, ) {
    console.log('Constructor');
    this.initContext();
  }

  initContext() {
    let result = this.data.callMe('test data');
    console.log(result);

    const temp2 = this.injector.get(JhkimserviceService);
    result = temp2.callMe('test data2');
    console.log(result);
  }
}
