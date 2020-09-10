import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseComponent } from './chinese.component';

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

describe('ChineseComponent', () => {
  let component: ChineseComponent;
  let fixture: ComponentFixture<ChineseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChineseComponent, TranslateMockPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
