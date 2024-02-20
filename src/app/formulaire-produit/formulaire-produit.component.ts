import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-formulaire-produit',
  templateUrl: './formulaire-produit.component.html',
  styleUrls: ['./formulaire-produit.component.css']
})

export class FormulaireProduitComponent implements OnInit {
  
  produit: Produit = {
    nom: '',
    description: '',
    prix: 0,
    lien: '',
    id_picsum: 0,
    qteStock: 0    
  };
  
  constructor(
    private produitService: ProduitService,
    public dialogRef: MatDialogRef<FormulaireProduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produit) { 
      if (data) { 
        this.produit = data;
      }  
    }

  ngOnInit(): void {
  }

  addProduit(produitForm: NgForm) { 
    if (produitForm.valid) { 
      this.produitService.addProduit(this.produit).subscribe(_ => { // si on ne réutilise pas le résultat on met un underscore
            produitForm.resetForm(); //réinitialise le formulaire
            //this.getProduits(); // met a jour et va chercher la liste des produits
            this.dialogRef.close('Produit ajouté!');
      });
    }
  }

  showFormProduit(produit: Produit) { // pour faire apparaitre le produit dans le formulaire de modif
    this.produit = produit;
  }

  updateProduit(produitForm: NgForm) {
    if (produitForm.valid) { // vérifie si c'est valide
      this.produitService.updateProduit(this.produit).subscribe(_ => { // appelle la méthode de update dans mes services et fait le update
        produitForm.resetForm(); // reset la liste
        //this.getProduits(); // va chercher les produits
        this.dialogRef.close('Produit modifié!');
      });
    }
  }

  annuler() { 
    this.dialogRef.close();
  }

}
