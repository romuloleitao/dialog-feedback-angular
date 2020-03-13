import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDialogCreateComponent } from './member-dialog-create.component';

describe('MemberDialogCreateComponent', () => {
  let component: MemberDialogCreateComponent;
  let fixture: ComponentFixture<MemberDialogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDialogCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDialogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
