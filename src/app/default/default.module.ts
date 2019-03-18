import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';

import { DefaultComponent } from './default.component';
import { Routing } from './default.routing';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [DefaultComponent]
})
export class DefaultModule implements OnInit {
  constructor() {
    console.log("constructor");
    this.InitContext();
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  public InitContext(): void  {
    console.log("InitContext");
  }
}
