import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepeditarComponent } from './cepeditar.component';

describe('CepeditarComponent', () => {
  let component: CepeditarComponent;
  let fixture: ComponentFixture<CepeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepeditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
