import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidsComponent } from './androids.component';

describe('AndroidsComponent', () => {
  let component: AndroidsComponent;
  let fixture: ComponentFixture<AndroidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidsComponent ]
    })
    .compileComponents();
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
