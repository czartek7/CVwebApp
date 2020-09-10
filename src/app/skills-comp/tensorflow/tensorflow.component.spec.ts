import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TensorflowComponent } from './tensorflow.component';

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

describe('TensorflowComponent', () => {
  let component: TensorflowComponent;
  let fixture: ComponentFixture<TensorflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TensorflowComponent, TranslateMockPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TensorflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
