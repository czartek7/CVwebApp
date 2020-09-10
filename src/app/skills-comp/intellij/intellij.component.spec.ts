import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellijComponent } from './intellij.component';

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

describe('IntellijComponent', () => {
  let component: IntellijComponent;
  let fixture: ComponentFixture<IntellijComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntellijComponent, TranslateMockPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntellijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
