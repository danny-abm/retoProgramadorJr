import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
itemRef: any;
  constructor(private db: AngularFireDatabase) { }



  async get(){
    try{

    return await this.db.object('cuentas').snapshotChanges();
    } catch(error){
      console.log("error en: getAll",error)
    }
  }

  /*async getById(collection, id){
    try{

    return await this.db.object(collection).doc(id).get();
    } catch(error){
      console.log("error en: getById",error)
    }
  }*/

  async update(collection, dato){
    try{

    return await this.db.object(collection).update(dato);
    } catch(error){
      console.log("error en: Update",error)
    }
  }



}
