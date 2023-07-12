import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainnavComponent } from './mainnav/mainnav.component';

const routes: Routes = [
  {path:'mainnav', component:MainnavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
