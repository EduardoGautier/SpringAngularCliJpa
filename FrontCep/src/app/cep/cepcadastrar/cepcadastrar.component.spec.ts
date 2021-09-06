import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepcadastrarComponent } from './cepcadastrar.component';

describe('CepcadastrarComponent', () => {
  let component: CepcadastrarComponent;
  let fixture: ComponentFixture<CepcadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepcadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepcadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
