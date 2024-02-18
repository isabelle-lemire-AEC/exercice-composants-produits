import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { TableProduitsComponent } from './table-produits/table-produits.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'a-propos', component: AProposComponent},
  { path: 'liste-produits', component: ListeProduitsComponent},
  { path: 'tableau', component: TableProduitsComponent},
  { path: 'produit/:id', component: FicheProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
