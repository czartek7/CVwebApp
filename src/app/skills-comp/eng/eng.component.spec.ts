import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngComponent } from './eng.component';

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

describe('EngComponent', () => {
  let component: EngComponent;
  let fixture: ComponentFixture<EngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EngComponent, TranslateMockPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
