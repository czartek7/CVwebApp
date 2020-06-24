import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'AngularCV';
  name:string = 'Czarek';
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
          element.style.animation = `navLinkFade 0.5s ease forwards ${index / 10}s`;
        }
    });
  } if (this.y.matches) {
    var nav = document.querySelector('.nav-item');
    var burger = document.querySelector('.burger');
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-animation');
  }
  }
}



