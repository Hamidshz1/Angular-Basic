import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  itemName: string = '';
  itemQuantity: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
