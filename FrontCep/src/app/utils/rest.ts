import{ environment } from '../../environments/environment';
import { HttpErrorResponse }  from '@angular/common/http';
import{ throwError } from 'rxjs';

export const CEP_API_URL = environment.apiCeps;

export function tratadorDeErros(erro: HttpErrorResponse) {
  let msg = '';
  if(erro.error instanceof ErrorEvent) {
    //Erro ocorreu no lado do client
    msg = `Ocorreu um erro: ${erro.error.message}`;
  }else {
    //Erro ocorreu no lado do servidor
    msg = `O Servidor retornou o erro: ${erro.status} ${erro.statusText}`;
  }
  return throwError({
    erro: erro.error,
    mensagem: msg,
    mensagemOriginal: erro.message
  });
}
