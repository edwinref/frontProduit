import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  id: number = 0; // Initialize the 'id' property here
  produit: Produit = new Produit();
  constructor(private employeeService: ProduitService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getProduitById(this.id).subscribe(data => {
      this.produit = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateProduit(this.id, this.produit).subscribe( data =>{
        this.goToProduitList();
      }
      , error => console.log(error));
  }

  goToProduitList(){
    this.router.navigate(['/produits']);
  }
}
