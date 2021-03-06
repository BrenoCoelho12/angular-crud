import { Injectable } from '@angular/core';
import { Produto } from './produto'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoDataService {

  constructor() { }

  private produtoSource = new BehaviorSubject({ produto: null, key: '' });
  produtoAtual = this.produtoSource.asObservable();

  obtemProduto(produto: any, key: string){
    console.log("entrou no obtemProduto");
    console.log(produto);
    console.log(key);
    this.produtoSource.next({produto: produto, key: key})
  }
}
