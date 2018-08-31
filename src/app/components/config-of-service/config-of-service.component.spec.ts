import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigOfServiceComponent } from './config-of-service.component';

describe('ConfigOfServiceComponent', () => {
  let component: ConfigOfServiceComponent;
  let fixture: ComponentFixture<ConfigOfServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigOfServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
