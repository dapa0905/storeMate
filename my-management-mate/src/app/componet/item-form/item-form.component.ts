import { Component } from '@angular/core';
import { ItemServiceService } from '../../service/itemService.service';
import { Item } from '../../model/item.model';
import { ItemCategory } from '../../enum/category.enum';

@Component({
  selector: 'app-item-form',
  standalone: false,
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent {

  constructor(private itemService: ItemServiceService){}

  categories = Object.values(ItemCategory);

  onSubmit(form: any):void {
    // const items = this.itemService.items$; 
    // const maxId = items.length > 0 ? Math.max(...items.map(item => item.itemId)) : 0; 
    
    const newItem: Item = {
        itemId: Date.now(),
        itemName: form.value.itemName,
        category: form.value.category,
        quantity: form.value.quantity,
        price: form.value.price,
        description: form.value.description,
        createdAt: new Date(),
        updateAt: new Date(),
    };

    this.itemService.addItem(newItem); // 서비스 메서드 호출
    console.log(newItem);
    form.reset(); // 폼 리셋
}
}
