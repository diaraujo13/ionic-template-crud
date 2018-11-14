import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverypassPage } from './recoverypass.page';

describe('RecoverypassPage', () => {
  let component: RecoverypassPage;
  let fixture: ComponentFixture<RecoverypassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverypassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverypassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
