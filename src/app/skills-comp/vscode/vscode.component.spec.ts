import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VscodeComponent } from './vscode.component';

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

describe('VscodeComponent', () => {
  let component: VscodeComponent;
  let fixture: ComponentFixture<VscodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VscodeComponent, TranslateMockPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
