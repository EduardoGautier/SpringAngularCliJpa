import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CeplistarComponent } from './ceplistar/ceplistar.component';

const routes: Routes = [
  {
    path:'ceps',
    component: CeplistarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CepsRoutingModule { }
