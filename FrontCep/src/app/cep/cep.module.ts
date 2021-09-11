import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeplistarComponent } from './ceplistar/ceplistar.component';
import { CepsRoutingModule } from './ceps-routing.module';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { CepcadastrarComponent } from './cepcadastrar/cepcadastrar.component';
import { CepeditarComponent } from './cepeditar/cepeditar.component';
import { FormsModule }   from '@angular/forms';




@NgModule({
  declarations: [
    CeplistarComponent,
    CepcadastrarComponent,
    CepeditarComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CepsRoutingModule
  ]
})
export class CepModule { }
