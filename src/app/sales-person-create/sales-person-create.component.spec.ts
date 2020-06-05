import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonCreateComponent } from './sales-person-create.component';

describe('SalesPersonCreateComponent', () => {
  let component: SalesPersonCreateComponent;
  let fixture: ComponentFixture<SalesPersonCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPersonCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPersonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
