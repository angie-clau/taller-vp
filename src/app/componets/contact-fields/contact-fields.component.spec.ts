import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFieldsComponent } from './contact-fields.component';

describe('ContactFieldsComponent', () => {
  let component: ContactFieldsComponent;
  let fixture: ComponentFixture<ContactFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
