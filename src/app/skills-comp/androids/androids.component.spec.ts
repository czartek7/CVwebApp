import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidsComponent } from './androids.component';

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

describe('AndroidsComponent', () => {
  let component: AndroidsComponent;
  let fixture: ComponentFixture<AndroidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AndroidsComponent, TranslateMockPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
