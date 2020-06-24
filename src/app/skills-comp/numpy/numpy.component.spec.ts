import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumpyComponent } from './numpy.component';

describe('NumpyComponent', () => {
  let component: NumpyComponent;
  let fixture: ComponentFixture<NumpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumpyComponent ]
    })
    .compileComponents();
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
