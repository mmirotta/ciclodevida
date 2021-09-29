import { Usuario } from './../clases/usuario';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosRef: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) { 
    this.usuariosRef = this.db.collection('usuarios');
  }

  public obtenerUsuarios() {
    return this.usuariosRef.valueChanges();
  }

  public crearUsuario(usuario: Usuario) {
    return this.usuariosRef.add({...usuario});
  }
}
