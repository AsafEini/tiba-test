import {Component, OnInit} from '@angular/core';
import {Product, ProductModel} from "./product.interface";
import {HeaderCols} from "./app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private listOfProducts: ProductModel = {};
  public isModalOpen: boolean = false;
  public headerConfig: any[];
  private idGen: number = 0;
  constructor(){

  }

  ngOnInit(){
    this.initHeaderConfigs();
  }
  private initHeaderConfigs(){
    this.headerConfig = [
      HeaderCols.name,
      HeaderCols.category,
      HeaderCols.price,
      HeaderCols.date
    ]
  }
  private openModal(): void{
    this.isModalOpen = !this.isModalOpen
  };
  private closeModal(value: boolean): void {
    this.isModalOpen = value;
  }

  public getCreatedProduct(product: Product){
    this.listOfProducts[this.idGen++] = {
      [HeaderCols.name]: product.Name,
      [HeaderCols.category]: product.Category,
      [HeaderCols.price]: product.Price,
      [HeaderCols.date]: product.Date
    };
      this.isModalOpen = false;
      console.log(this.listOfProducts)
  }
}
