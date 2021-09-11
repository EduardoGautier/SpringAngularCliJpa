import { CepcadastrarComponent } from './cepcadastrar/cepcadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CeplistarComponent } from './ceplistar/ceplistar.component';
import { CepeditarComponent } from './cepeditar/cepeditar.component';

const routes: Routes = [
  {
    path:'ceps',
    children:[{path:'',component:CeplistarComponent},
    {path: 'cadastrar', component:CepcadastrarComponent},
    {path: 'editar/:id',component: CepeditarComponent}]
   },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CepsRoutingModule { }
