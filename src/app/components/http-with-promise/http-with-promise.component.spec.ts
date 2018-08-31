import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpWithPromiseComponent } from './http-with-promise.component';

describe('HttpWithPromiseComponent', () => {
  let component: HttpWithPromiseComponent;
  let fixture: ComponentFixture<HttpWithPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpWithPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpWithPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
