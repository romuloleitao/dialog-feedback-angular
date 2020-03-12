import { Component, OnInit } from '@angular/core';
import { MemberDialogue } from '../memberDialogue';
import { MEMBERDIALOGUES } from '../mock-member-dialogues';

@Component({
  selector: 'member-dialogues',
  templateUrl: './member-dialogues.component.html',
  styleUrls: ['./member-dialogues.component.scss']
})
export class MemberDialoguesComponent implements OnInit {

  memberDialogues = MEMBERDIALOGUES;

  constructor() { }

  ngOnInit(): void {
  }

}
