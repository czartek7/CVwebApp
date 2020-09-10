import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AngularCV';

  ///////////////////////////////
  // Hamburger icon slide
  ///////////////////////////////

  x = window.matchMedia('(max-width: 768px)');
  y = window.matchMedia('(min-width: 768px)');

  navSlide() {
    if (this.x.matches) {
      var nav = document.querySelector('.nav-item');
      var burger = document.querySelector('.burger');
      var navItems: any = document.querySelectorAll('.nav-item li');
      nav.classList.toggle('nav-active');
      burger.classList.toggle('burger-animation');

      navItems.forEach((element, index) => {
        if (element.style.animation) {
          element.style.animation = '';
        } else {
          element.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 9
          }s`;
        }
      });
    }
  }

  navClose() {
    var nav = document.querySelector('.nav-item');
    var burger = document.querySelector('.burger');
    var navItems: any = document.querySelectorAll('.nav-item li');

    if (nav.classList.contains('nav-active')) {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('burger-animation');

      navItems.forEach((element) => {
        element.style.animation = '';
      });
    }
  }

  ////////////////////////
  // ngx-translate
  ////////////////////////

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('pl');
  }

  switchLanguage() {
    var current = this.translate.currentLang;

    if (current == 'en') {
      this.translate.use('pl');
    } else {
      this.translate.use('en');
    }
  }

  //////////////////////////////////////////
  // Language button configuration
  //////////////////////////////////////////

  onSelect() {
    if (this.y.matches) {
      var element = <HTMLInputElement>document.getElementById('radio-aa');
      element.setAttribute('checked', '');
    }
  }

  ngOnInit() {
    this.onSelect();
  }
}
