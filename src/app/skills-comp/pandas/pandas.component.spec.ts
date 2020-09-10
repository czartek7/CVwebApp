import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandasComponent } from './pandas.component';

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

describe('PandasComponent', () => {
  let component: PandasComponent;
  let fixture: ComponentFixture<PandasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PandasComponent, TranslateMockPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
