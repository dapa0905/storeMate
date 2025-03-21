import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../service/itemService.service';
import { Item } from '../../model/item.model';
import { User } from '../../model/user.model';
import { AuthServiceService } from '../../service/authService.service';
import { MatDialog } from '@angular/material/dialog';
import { ItemRenderComponent } from '../item-render/item-render.component';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent implements OnInit{

  constructor(
    public itemService: ItemServiceService,
    private authService: AuthServiceService,
    public dialog: MatDialog,
  ){}

  items: Item[] = [];
  currentUser: User | null = null; 
  filteredItems: Item[] = [];
  searchText: string = '';
  renderItem!: Item;

  currentPage: number = 1;
  itemsPerPage: number = 10;


  ngOnInit(): void {

    this.itemService.items$.subscribe((items: Item[]) => {
      this.items = items;
      this.filteredItems = items;
    });

    // currentUser를 User or null로 선언하였기때문에 null일경우 처리도 해야한다.
    this.authService.currentUser$.subscribe({
      next: (user) => {
        if (user) {
          this.currentUser = user;
        }
        else {
          this.currentUser = null;
        }
      },
      error: (err) => {
        console.error('userLoding Error : ',err);
      }
    })

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

  onRenterItem(itemId: number): void {

    this.itemService.getItemById(itemId).subscribe(item => {
      if(item){
        this.dialog.open(ItemRenderComponent,{
          data: item
        })
        console.log(item);
      }
      else {
        console.log('this is wrong')
      }
    })

  }

}
