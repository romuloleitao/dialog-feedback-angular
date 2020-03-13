import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberDialogCreateComponent } from './member-dialog-create/member-dialog-create.component';
import { MemberDialoguesComponent } from './member-dialogues/member-dialogues.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "member-dialogue-create", component: MemberDialogCreateComponent },
  { path: "member-dialogues", component: MemberDialoguesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
