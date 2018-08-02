import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalConfig} from "./create-products.interface";
import {HeaderCols} from "../app.model";
import {Product} from "../product.interface";

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {
  private modalConfiguration: ModalConfig[];


  @Output() singleProduct: EventEmitter<Product> = new EventEmitter();
  @Output() exitAction: EventEmitter<boolean> = new EventEmitter()

  constructor() {
  }

  ngOnInit() {
    this.modalConfiguration = this.createModal()
  }

  private createModal(): ModalConfig[] {
    return [
      {name: HeaderCols.name, inputType: 'text'},
      {name: HeaderCols.category, inputType: 'text'},
      {name: HeaderCols.price, inputType: 'text'},
      {name: HeaderCols.date, inputType: 'text'}
    ]
  };
  private createProduct(Name, Category, Price, Date): void{
    this.singleProduct.emit({
      Name,
      Category,
      Price,
      Date
    })
  }

  private closeModal(): void {
    this.exitAction.emit(false)
  }
}
