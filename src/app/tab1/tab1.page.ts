import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CuentasService } from '../services/cuentas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page implements OnInit{

  cuentas=[
    {
    nombre: "cuenta ahorro",
    numero:12232324343,
    saldo:300.00,
    },
    {
      nombre: "cuenta navidad",
      numero:122323244543,
      saldo:200.00, 
    }];

    
accounts=[];

itemRef: any;
  constructor(private db: AngularFireDatabase) {}
  
  ngOnInit(){
      /*this.cuentaService.getAll('cuentas').then(firebaseResponse=>{
        firebaseResponse.subscribe(cuentaRef=>{
          console.log(cuentaRef);
        })
      })*/
      //consumiendo el json con los datos de la base de datos
      this.itemRef = this.db.object('cuentas');
      this.itemRef.snapshotChanges().subscribe(action => {
        this.accounts=action.payload.val();
        //impresion de la tabla cuentas por consola
        console.log(this.accounts)
      });

      console.log(this.cuentas)
      
    }

}


 
