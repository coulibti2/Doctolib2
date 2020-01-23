import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Event2Page } from './event2.page';

describe('Event2Page', () => {
  let component: Event2Page;
  let fixture: ComponentFixture<Event2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Event2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Event2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
