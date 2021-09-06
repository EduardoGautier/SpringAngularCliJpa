import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeplistarComponent } from './ceplistar/ceplistar.component';
import { CepsRoutingModule } from './ceps-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { CepcadastrarComponent } from './cepcadastrar/cepcadastrar.component';



@NgModule({
  declarations: [
    CeplistarComponent,
    CepcadastrarComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    CepsRoutingModule
  ]
})
export class CepModule { }
