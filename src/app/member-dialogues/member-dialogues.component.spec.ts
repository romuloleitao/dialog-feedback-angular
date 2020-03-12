import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDialoguesComponent } from './member-dialogues.component';

describe('MemberDialoguesComponent', () => {
  let component: MemberDialoguesComponent;
  let fixture: ComponentFixture<MemberDialoguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDialoguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDialoguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
