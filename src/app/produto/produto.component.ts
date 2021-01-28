import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private _router: Router) { }

  public produtos = [
    {"id": 1, "descricao": "OLEO MOBIL 4T", valor: 23},
    {"id": 2, "descricao": "PNEU TAMANHO 20", valor: 25},
    {"id": 3, "descricao": "PNEU TAMANHO 24", valor: 35},
    {"id": 4, "descricao": "PNEU TAMANHO 26", valor: 45},
  ]

  onDelete(produto: any){
    this._router.navigate(['/product', produto.id]);
  }

  onEdit(produto: any){
    console.log(produto.id);
  }

  ngOnInit(): void {
  }

}
