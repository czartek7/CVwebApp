import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
})
export class TranslateMockPipe implements PipeTransform {
  public name: string = 'translate';

  public transform(query: string, ...args: any[]): any {
    return query;
  }
}

declare const viewport;
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      declarations: [AppComponent, TranslateMockPipe],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularCV'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularCV');
  });

  it('should render logo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.logo span').textContent).toContain(
      'Cieśliński'
    );
  });

  it('should view sidebar when navSlide function invoked', () => {
    viewport.set(700);
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const compiled = fixture.nativeElement;
    const nav = compiled.querySelector('.nav-item');
    component.navSlide();
    expect(nav.className).toEqual('nav-item nav-active');
  });

  it('should animate hamburger icon when navClose function invoked', () => {
    viewport.set(700);
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const compiled = fixture.nativeElement;
    const burger = compiled.querySelector('.burger');
    component.navClose();
    expect(burger.className).toEqual('burger');
  });

  it('should switch language when switchLanguage invoked, pl to eng', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.translate.use('pl');
    component.switchLanguage();
    expect(component.translate.currentLang).toEqual('en');
  });

  it('should switch language when switchLanguage invoked, eng to pl', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.translate.use('en');
    component.switchLanguage();
    expect(component.translate.currentLang).toEqual('pl');
  });

  it('should animate nav-links in sidebar', () => {
    viewport.set(700);
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const compiled = fixture.nativeElement;
    const navItems: any = compiled.querySelectorAll('.nav-item li');
    component.navSlide();
    component.navSlide();
    expect(navItems[0].style.animation).toEqual('');
  });
});
