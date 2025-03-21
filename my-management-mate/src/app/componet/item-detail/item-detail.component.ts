import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemServiceService } from '../../service/itemService.service';
import { Item } from '../../model/item.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: false,
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent implements OnInit{

  itemId: number | null = null;
  item: Item | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    public itemService: ItemServiceService,
    private location: Location,
  ){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.itemId = +params.get('id')!;
      if(this.itemId) {
        this.itemService.getItemById(this.itemId).subscribe({
          next: (selectedItem) => {
            this.item = selectedItem;
          },
          error: (err) => {
            console.log(err);
          }
        })
      }
    })
  }

  deleteItem():void {
    if(!this.itemId) {
      return;
    }

    this.itemService.deleteItem(this.itemId);
    this.location.back();
  }
  

}
