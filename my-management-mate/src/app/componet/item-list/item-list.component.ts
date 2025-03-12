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
  filteredItems: Item[] = [];
  searchText: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 10;

  ngOnInit(): void {
    this.itemService.items$.subscribe((items: Item[]) => {
      this.items = items;
      this.filteredItems = items;
    });
  };

  onSearchChange(): void{
    if(!this.searchText){
      this.filteredItems = this.items;
    }
    else {
      const lowerCaseSearch = this.searchText.toLowerCase();
      // console.log(lowerCaseSearch);
      this.filteredItems = this.items.filter( item => 
        item.itemName.toLowerCase().includes(lowerCaseSearch) 
      );
    }
    this.currentPage = 1;
  }

}
