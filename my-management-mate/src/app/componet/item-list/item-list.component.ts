import { Component } from '@angular/core';
import { ItemServiceService } from '../../service/itemService.service';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {

  constructor(public itemService: ItemServiceService){

  }

}
