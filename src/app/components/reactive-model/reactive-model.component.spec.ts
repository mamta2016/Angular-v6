import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveModelComponent } from './reactive-model.component';

describe('ReactiveModelComponent', () => {
  let component: ReactiveModelComponent;
  let fixture: ComponentFixture<ReactiveModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
