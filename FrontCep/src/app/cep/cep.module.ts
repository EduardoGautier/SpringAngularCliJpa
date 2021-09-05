import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeplistarComponent } from './ceplistar/ceplistar.component';
import { CepsRoutingModule } from './ceps-routing.module';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    CeplistarComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    CepsRoutingModule
  ]
})
export class CepModule { }
