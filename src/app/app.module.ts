import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ProduitService } from './produit.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { NomDescriptionComponent } from './nom-description/nom-description.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { PrixComponent } from './prix/prix.component';
import { ImageComponent } from './image/image.component';
import { TableProduitsComponent } from './table-produits/table-produits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';


import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { FormulaireProduitComponent } from './formulaire-produit/formulaire-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    FicheProduitComponent,
    LienDetailsComponent,
    ListeProduitsComponent,
    NomDescriptionComponent,
    PiedPageComponent,
    PrixComponent,
    ImageComponent,
    TableProduitsComponent,
    AccueilComponent,
    AProposComponent,
    FormulaireProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatToolbarModule, 
    MatListModule, 
    MatDividerModule, 
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
