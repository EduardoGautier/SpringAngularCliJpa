import { CepService } from './../../service/cep.service';
import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/cep.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ceplistar',
  templateUrl: './ceplistar.component.html',
  styleUrls: ['./ceplistar.component.css']
})
export class CeplistarComponent implements OnInit {
  colunas : string[] = ['Cep','Logradouro','Complemento','Bairro', 'Localidade', 'UF','Action']
  enderecos : Endereco[] = []
  constructor(private cepService: CepService,private router: Router) { }

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

deleteAdress(id:number){
  console.log("Clicou")
  this.cepService.deleteAdress(id).subscribe(
    dados => {
      console.log("Entrou")
      this.ngOnInit()
    },
    erro =>{
      console.log(erro);
      console.log(id)
      alert('Erro ao buscar usuarios');
    }
  );
}
editAddress(id: number){
  console.log("Entrou")
  this.ngOnInit()
  this.router.navigate([`ceps/editar/${id}`]);
}

}
