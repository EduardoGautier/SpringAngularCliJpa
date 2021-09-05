import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeplistarComponent } from './ceplistar.component';

describe('CeplistarComponent', () => {
  let component: CeplistarComponent;
  let fixture: ComponentFixture<CeplistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeplistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeplistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
