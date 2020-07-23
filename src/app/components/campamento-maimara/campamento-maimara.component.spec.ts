import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampamentoMaimaraComponent } from './campamento-maimara.component';

describe('CampamentoMaimaraComponent', () => {
  let component: CampamentoMaimaraComponent;
  let fixture: ComponentFixture<CampamentoMaimaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampamentoMaimaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampamentoMaimaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
