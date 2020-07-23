import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaDominicalComponent } from './escuela-dominical.component';

describe('EscuelaDominicalComponent', () => {
  let component: EscuelaDominicalComponent;
  let fixture: ComponentFixture<EscuelaDominicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscuelaDominicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuelaDominicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
