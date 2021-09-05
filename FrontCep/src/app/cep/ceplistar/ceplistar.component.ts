import { CepService } from './../../service/cep.service';
import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/cep.model';

@Component({
  selector: 'app-ceplistar',
  templateUrl: './ceplistar.component.html',
  styleUrls: ['./ceplistar.component.css']
})
export class CeplistarComponent implements OnInit {
  colunas : string[] = ['Cep','Logradouro','Complemento']
  enderecos : Endereco[] = []
  constructor(private cepService: CepService) { }

  ngOnInit(): void {
    this.cepService.getAllAdressess().subscribe(
      dados => {
        this.enderecos = dados;
      },
      erro =>{
        console.log(erro);
        alert('Erro ao buscar usuarios');
        console.log(this.enderecos);
        this.enderecos = [];
      }
    );
  }

}
