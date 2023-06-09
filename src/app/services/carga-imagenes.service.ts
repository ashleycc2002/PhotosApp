import { Injectable } from '@angular/core';
import{AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

 private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) { }

  private guardarImange(imagen:{nombre:string,url:string}){

    this.db.collection(`/${this.CARPETA_IMAGENES}`)
            .add(imagen);
  }


}
