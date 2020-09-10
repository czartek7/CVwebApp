import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumpyComponent } from './numpy.component';

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

describe('NumpyComponent', () => {
  let component: NumpyComponent;
  let fixture: ComponentFixture<NumpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumpyComponent, TranslateMockPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
