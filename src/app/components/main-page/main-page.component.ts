import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  clickCounter:number = 0;

  countClick() {
     this.clickCounter += 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
