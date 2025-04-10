import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PedrasNaturaisComponent } from './pages/pedras-naturais/pedras-naturais.component';
import { PedrasSinteticasComponent } from './pages/pedras-sinteticas/pedras-sinteticas.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { ContactosComponent } from './pages/contactos/contactos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pedras-naturais', component: PedrasNaturaisComponent },
  { path: 'pedras-sinteticas', component: PedrasSinteticasComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'orcamento', component: OrcamentoComponent },
  { path: 'contactos', component: ContactosComponent },
];
