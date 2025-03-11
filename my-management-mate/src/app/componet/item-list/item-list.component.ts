import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../service/itemService.service';
import { Item } from '../../model/item.model';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent implements OnInit{

  constructor(public itemService: ItemServiceService){}

  items: Item[] = [];

  ngOnInit(): void {
    this.itemService.items$.subscribe((items: Item[]) => {
      this.items = items;
    });
  };

}
