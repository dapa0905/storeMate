import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../../model/item.model';

@Component({
  selector: 'app-item-render',
  standalone: false,
  templateUrl: './item-render.component.html',
  styleUrl: './item-render.component.css'
})
export class ItemRenderComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public item: Item
  ){}

}
