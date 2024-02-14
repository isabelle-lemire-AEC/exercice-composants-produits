import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from './produit';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  API_URL = 'http://localhost/api-produits/';

  constructor(private http: HttpClient) { }

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.API_URL);  
  }

  addProduit(produit:Produit): Observable<void> {
    return this.http.post<void>(this.API_URL, produit, httpOptions);
  }

  updateProduit(produit:Produit): Observable<void> {
    return this.http.put<void>(`${this.API_URL}/${produit.id}`, produit, httpOptions);
  }

  deleteProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}?id=${id}`); // faire attention pour ne pas mettre /${_id}` la diagonale est déjà présente dans le url
  }


}
