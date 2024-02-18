import { Component, OnInit } from '@angular/core';
//import { PRODUITS } from '../mock-produits';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  //produits = PRODUITS
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getProduits();
  }
  
  getProduits(): void {
    this.produitService.getProduits().subscribe(
      produits => {
        this.produits = produits;
      }
    );
  }

}
