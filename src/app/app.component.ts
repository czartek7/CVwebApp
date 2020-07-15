import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  title = 'AngularCV';
  name:string = 'Czarek';

  ///////////////////////////////
  // Hamburger icon slide
  ///////////////////////////////

  x = window.matchMedia("(max-width: 768px)");
  y = window.matchMedia("(min-width: 768px)");

  navSlide() {
    if (this.x.matches) {
    var nav = document.querySelector('.nav-item');
    var burger = document.querySelector('.burger');
    var navItems: any = document.querySelectorAll('.nav-item li');
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-animation');

    navItems.forEach((element, index) => {
      if (element.style.animation) {
          element.style.animation = ""
        } else {
          element.style.animation = `navLinkFade 0.5s ease forwards ${index / 9}s`;
        }
    });
    } if (this.y.matches) {
      var nav = document.querySelector('.nav-item');
      var burger = document.querySelector('.burger');
      nav.classList.toggle('nav-active');
      burger.classList.toggle('burger-animation');
    }
  }

  ////////////////////////
  // ngx-translate
  ////////////////////////

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pl');
  }

  switchLanguage() {

    var current = this.translate.currentLang

    if (current == 'en') {
      this.translate.use('pl');
    } else {
      this.translate.use('en');
    } 
  }

  onSelect() {
    if (this.y.matches) {
      var element = <HTMLInputElement> document.getElementById("radio-aa");
    element.setAttribute("checked", "");
    }
  }

  ngOnInit() {
    this.onSelect();
  }
}



