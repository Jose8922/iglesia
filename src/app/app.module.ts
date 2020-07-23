import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CampamentoMaimaraComponent } from './components/campamento-maimara/campamento-maimara.component';
import { DevocionalesComponent } from './components/devocionales/devocionales.component';
import { EscuelaDominicalComponent } from './components/escuela-dominical/escuela-dominical.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { OracionComponent } from './components/oracion/oracion.component';
import { OtrosComponent } from './components/otros/otros.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    CampamentoMaimaraComponent,
    DevocionalesComponent,
    EscuelaDominicalComponent,
    FooterComponent,
    HistoriaComponent,
    HorariosComponent,
    OracionComponent,
    OtrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
