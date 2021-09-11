import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CepService } from 'src/app/service/cep.service';
import { Endereco } from 'src/app/model/cep.model';


@Component({
  selector: 'app-cepeditar',
  templateUrl: './cepeditar.component.html',
  styleUrls: ['./cepeditar.component.css']
})
export class CepeditarComponent implements OnInit {

  constructor(private router: ActivatedRoute, private cepsService: CepService, private fb: FormBuilder) { }
  id: any;
  endereco: Endereco | undefined;

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.cepsService.getAddressById(this.id).subscribe(
      dados=> {
        console.log(this.id);
        this.endereco = dados;
      },
      erro=>{
        console.log(erro);
      }
    );
  }

}
