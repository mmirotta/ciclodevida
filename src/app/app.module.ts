import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { EditorUsuarioComponent } from './componentes/editor-usuario/editor-usuario.component';
import { DetalleUsuarioComponent } from './componentes/detalle-usuario/detalle-usuario.component';
import { GrillaUsuariosComponent } from './componentes/grilla-usuarios/grilla-usuarios.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MiservicioService } from './servicios/miservicio.service';
import { HttpClientModule } from '@angular/common/http';
import { GrillaPaisesComponent } from './componentes/grilla-paises/grilla-paises.component';

// FIREBASE
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { NegativoDirective } from './directivas/negativo.directive';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    EditorUsuarioComponent,
    DetalleUsuarioComponent,
    GrillaUsuariosComponent,
    GrillaPaisesComponent,
    DetallePaisComponent,
    ResaltarDirective,
    NegativoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule
  ],
  providers: [MiservicioService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
