import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';

const routes: Routes = [
  {path:'',component:ParentcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
