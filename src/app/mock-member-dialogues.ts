import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    memberDialogues = [
        { id: 11, memberName: 'Romulo Leitao' },
        { id: 12, memberName: 'Narco Meu' },
        { id: 13, memberName: 'Bombasto Mei' },
        { id: 14, memberName: 'Celeritas Tas' },
        { id: 15, memberName: 'Magneta Tube' },
        { id: 16, memberName: 'RubberMan Non' },
        { id: 17, memberName: 'Dynama Ma' },
        { id: 18, memberName: 'Dr IQ Roca' },
        { id: 19, memberName: 'Magma Mu' },
        { id: 20, memberName: 'Tornado Uou' }
    ];

    constructor() { }

    public getMemberDialogs(): Array<{ memberName }> {
        return this.memberDialogues;
    }

    public createMemberDialogue(memberDialogue: { id, memberName }) {
        this.memberDialogues.push(memberDialogue);
    }
}