import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { ResultComponent } from './pages/result/result.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  { path: '',   redirectTo: '/list', pathMatch: 'full' },
  { path: 'result', component: ResultComponent },
  { path: 'list', component: ListComponent },
  { path: 'profile', component: SkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
