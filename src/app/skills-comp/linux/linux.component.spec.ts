import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxComponent } from './linux.component';

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

describe('LinuxComponent', () => {
  let component: LinuxComponent;
  let fixture: ComponentFixture<LinuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinuxComponent, TranslateMockPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
