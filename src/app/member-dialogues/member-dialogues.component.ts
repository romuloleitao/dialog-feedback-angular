import { Component, OnInit } from '@angular/core';
import { DataService } from '../mock-member-dialogues';

@Component({
  selector: 'member-dialogues',
  templateUrl: './member-dialogues.component.html',
  styleUrls: ['./member-dialogues.component.scss']
})
export class MemberDialoguesComponent implements OnInit {

  memberDialogues;
  selectedMemberDialogue;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.memberDialogues = this.dataService.getMemberDialogs();
  }

  public selectMemberDialogue(memberDialogue) {
    this.selectedMemberDialogue = memberDialogue;
  }

}
