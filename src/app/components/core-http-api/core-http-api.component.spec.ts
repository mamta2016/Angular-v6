import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHttpAPIComponent } from './core-http-api.component';

describe('CoreHttpAPIComponent', () => {
  let component: CoreHttpAPIComponent;
  let fixture: ComponentFixture<CoreHttpAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreHttpAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreHttpAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
