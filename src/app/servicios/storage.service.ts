import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private dir = 'uploads/';

  constructor(private storage: AngularFireStorage) { }

  //Método para subir archivo
  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(this.dir + nombreArchivo, datos);
  }
}
