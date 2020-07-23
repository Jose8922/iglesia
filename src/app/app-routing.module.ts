import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InicioComponent} from './components/inicio/inicio.component';
import {HorariosComponent} from './components/horarios/horarios.component';
import {DevocionalesComponent} from './components/devocionales/devocionales.component';
import {OracionComponent} from './components/oracion/oracion.component';
import {EscuelaDominicalComponent} from './components/escuela-dominical/escuela-dominical.component';
import {CampamentoMaimaraComponent} from './components/campamento-maimara/campamento-maimara.component';
import {OtrosComponent} from './components/otros/otros.component';
import {HistoriaComponent} from './components/historia/historia.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'horarios', component: HorariosComponent},
  {path: 'devocionales', component: DevocionalesComponent},
  {path: 'oracion', component: OracionComponent},
  {path: 'escuela-dominical', component: EscuelaDominicalComponent},
  {path: 'campamento-maimara', component: CampamentoMaimaraComponent},
  {path: 'otros', component: OtrosComponent},
  {path: 'historia', component: HistoriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
