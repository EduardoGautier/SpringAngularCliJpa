import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CepService } from 'src/app/service/cep.service';

@Component({
  selector: 'app-cepcadastrar',
  templateUrl: './cepcadastrar.component.html',
  styleUrls: ['./cepcadastrar.component.css']
})
export class CepcadastrarComponent implements OnInit {

  dadosCepForm = this.fb.group({
    Cep: ['', [Validators.required, Validators.maxLength(8)]],
    Logradouro: [''],
    Complemento: [''],
    Bairro: [''],
    Localidade: ['',[Validators.required, Validators.maxLength(30)]],
    UF: ['']
  });

  constructor(private fb: FormBuilder,private router: Router, private cepService: CepService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const dadosCep = this.dadosCepForm.value;
    this.cepService.setAdress(dadosCep).subscribe(
      result=>{
        this.router.navigate(['/ceps']);
      },
      erro =>{
        console.log(erro);
        console.log(dadosCep)
        alert("Erro ao cadastrar o Cep");
      }
    );
  }
}

