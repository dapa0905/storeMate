import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemServiceService } from '../../service/itemService.service';
import { Item } from '../../model/item.model';

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
    private router: Router,
    private route: ActivatedRoute,
    public itemService: ItemServiceService
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
          }
        })
      }
    })

  }
  

}
