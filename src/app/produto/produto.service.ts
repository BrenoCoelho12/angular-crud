import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Produto } from './produto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  insert(produto: Produto){
    console.log("insert");
    this._angularFireDatabase.list("produtos").push(produto)
      .then((result: any) => {
        console.log(result.key);
    })
  }

  update(produto: Produto, key: string){
    console.log("update");
    this._angularFireDatabase.list("produtos").update(key, produto);
  }

  getAll() {
    return this._angularFireDatabase.list('produtos')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(data => ({ key: data.payload.key, ...data.payload.val() as {} }));
        })
      );
  }

  delete(key: string){
    console.log("delete");
    this._angularFireDatabase.object(`produtos/${key}`).remove();

  }
}
