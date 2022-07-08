import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { EventManager } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public pass: any;
  public isgo: any
  constructor(private eventManager: EventManager) {

  }

  ngOnInit(): void {

    // $(document).keydown(function (event) {
    //   if (event.key == 'Enter') {
    //     this.loding()
    //   }
    // })
    this.eventManager.addGlobalEventListener('window', 'keyup.Enter', () => {
      // console.log(this.pass)
      this.loding()
    });
  }
  loding() {
    console.log(this.pass)
    if (this.pass === '555666') {
      console.log('yes')
      this.isgo = true
    } else {
      this.pass = ''
    }
  }
}
