import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import {ProdutoDataService} from '../produto-data.service'
import { Observable } from 'rxjs';
import { Produto } from '../produto';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  produtos: Observable<any>;

  constructor(private _produtoService: ProdutoService,
              private _produtoDataService: ProdutoDataService) { }

  ngOnInit() {
    this.produtos = this._produtoService.getAll();
  }

  delete(key: string) {
    this._produtoService.delete(key);
  }

  edit(produto: Produto, key: string){
    this._produtoDataService.obtemProduto(produto, key);
  }

}
