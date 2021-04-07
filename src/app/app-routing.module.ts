import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarryPotterComponent } from './components/harry-potter/harry-potter.component';

const routes: Routes = [
  { path: '', component: HarryPotterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
