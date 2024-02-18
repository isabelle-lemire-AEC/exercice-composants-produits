import { Component, OnInit, Input } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {
  @Input() produit: Produit | undefined;

  constructor(private produitService: ProduitService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idFromUrl = this.route.snapshot.paramMap.get('id');
    if (idFromUrl) {
      this.getProduitById(+idFromUrl);
    }
  }

  getProduitById(id: number): void {
    this.produitService.getProduit(id).subscribe(
      resultat => {
        this.produit = resultat;
      }
    );
  }

}

