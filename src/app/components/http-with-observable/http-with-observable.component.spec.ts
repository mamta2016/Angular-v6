import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpWithObservableComponent } from './http-with-observable.component';

describe('HttpWithObservableComponent', () => {
  let component: HttpWithObservableComponent;
  let fixture: ComponentFixture<HttpWithObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpWithObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpWithObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
