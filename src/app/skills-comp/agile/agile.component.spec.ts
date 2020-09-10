import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileComponent } from './agile.component';

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

describe('AgileComponent', () => {
  let component: AgileComponent;
  let fixture: ComponentFixture<AgileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgileComponent, TranslateMockPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
