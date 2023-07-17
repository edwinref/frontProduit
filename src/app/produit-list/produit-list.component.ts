import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produits: Produit[] = []; // Initialize the 'produits' property here

  constructor(private employeeService: ProduitService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProduits();
  }

  private getProduits(){
    this.employeeService.getProduitsList().subscribe(data => {
      this.produits = data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['produit-details', id]);
  }

  updateProduit(id: number){
    this.router.navigate(['update-produit', id]);
  }

  deleteProduit(id: number){
    this.employeeService.deleteProduit(id).subscribe( data => {
      console.log(data);
      this.getProduits();
    })
  }
}
