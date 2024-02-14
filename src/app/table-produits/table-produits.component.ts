import { Component, OnInit, ViewChild } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table-produits',
  templateUrl: './table-produits.component.html',
  styleUrls: ['./table-produits.component.css']
})
export class TableProduitsComponent implements OnInit {
  dataSourceProduits: MatTableDataSource<Produit> = new MatTableDataSource();
  columnsToDisplay = ['nom', 'actions'];

  @ViewChild(MatTable) tableProduits!: MatTable<Produit>;
  newProduit: Produit = {
    nom: '',
    description: '',
    prix: 0,
    lien: '',
    id_picsum: 0,
    qteStock: 0    
  };

  /* Pour la pagniation et le tri */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  
  constructor(private produitService: ProduitService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getProduits()
  }

  getProduits() { 
    this.produitService.getProduits().subscribe(
      resultat => {
        console.log(resultat);

        /* associer les résultats reçus par l'API à la source de données du tableau */
        this.dataSourceProduits = new MatTableDataSource(resultat);

        /* Pour la pagniation et le tri */
        this.dataSourceProduits.paginator = this.paginator;
        this.dataSourceProduits.sort = this.sort;

        /* générer les résultats du tableau */
        this.tableProduits.renderRows();
      }
    );
  }

  addProduit(produitFormAjout: NgForm) { 
    if (produitFormAjout.valid) { 
      this.produitService.addProduit(this.newProduit).subscribe(_ => { // si on ne réutilise pas le résultat on met un underscore
            produitFormAjout.resetForm(); //réinitialise le formulaire
            this.getProduits(); // met a jour et va chercher la liste des produits
            this._snackBar.open("Produit ajouté!", undefined, {
              duration: 2000
            });
      });
    }
  }

  deleteProduit(id: number) { 
    this.produitService.deleteProduit(id).subscribe(_ => { // fait le delete
      this.getProduits(); // une fois que c'Est fait, il met a jour et retourne la lise des produits
      this._snackBar.open("Produit supprimé!", undefined, {
        duration: 2000
      });
      }
    );
  }
    
    
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceProduits.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceProduits.paginator) {
      this.dataSourceProduits.paginator.firstPage();
    }
  }        

}