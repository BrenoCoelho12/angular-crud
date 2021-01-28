import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoDataService } from '../produto-data.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  produto: Produto;
  key: string = '';

  constructor(private _produtoService: ProdutoService, 
              private _produtoDataService: ProdutoDataService) { }

  ngOnInit() {
    this.produto = new Produto();

    this._produtoDataService.produtoAtual.subscribe(data => {
       if(data.produto && data.key) {
          this.produto = new Produto();
          this.produto.descricao = 'tead';
          this.produto.valor = 20;
          this.key = data.key;
       }
    })
  }

  onSubmit(){
    if(this.key){
      this._produtoService.update(this.produto, this.key);
    }
    else{
      this._produtoService.insert(this.produto);
    }
    
    this.key = '';
  }

}
