import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Css3Component } from './css3.component';

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

describe('Css3Component', () => {
  let component: Css3Component;
  let fixture: ComponentFixture<Css3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Css3Component, TranslateMockPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Css3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
