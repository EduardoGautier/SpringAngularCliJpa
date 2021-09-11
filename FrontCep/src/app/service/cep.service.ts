import { Injectable } from '@angular/core';
import { Endereco } from '../model/cep.model';
import { RestapiService } from './restapi.service';
import { CEP_API_URL } from '../utils/rest';
@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private api: RestapiService) { }

  public getAllAdressess(){
    return this.api.get<Endereco[]>(CEP_API_URL)
  }

  public getAdress(cep: string){
    return this.api.get<Endereco>(`${CEP_API_URL}/${cep}`)
  }
  public getAddressById(id: number){
    return this.api.get<Endereco>(`${CEP_API_URL}/id/${id}`)
  }

  public setAdress(cep: Endereco){
    return this.api.post<Endereco>(`${CEP_API_URL}/add`,cep)
  }
  public deleteAdress(id:number){
    return this.api.delete(`${CEP_API_URL}/${id}`);
  }


}
