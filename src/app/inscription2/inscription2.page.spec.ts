import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscription2Page } from './inscription2.page';

describe('Inscription2Page', () => {
  let component: Inscription2Page;
  let fixture: ComponentFixture<Inscription2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inscription2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inscription2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
