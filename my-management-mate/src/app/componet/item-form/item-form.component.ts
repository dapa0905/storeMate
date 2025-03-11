import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../service/itemService.service';
import { ItemCategory } from '../../enum/category.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../model/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  standalone: false,
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent implements OnInit{
  
  checkoutForm!: FormGroup;
  categories = Object.values(ItemCategory);

  constructor(
    private itemService: ItemServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
  ){}
  
  ngOnInit(): void {
    // 폼 초기화
    this.checkoutForm = this.formBuilder.group({
      itemName: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', Validators.required],  
      quantity: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(1)]],
      description: ['']
    });
  }
  onSubmit():void {
    if(this.checkoutForm.valid){
      const formValue = this.checkoutForm.value;
      const newItem: Item = {
        itemId: Date.now(),
        itemName: formValue.itemName,
        category: formValue.category,
        quantity: formValue.quantity,
        price: formValue.price,
        createdAt: new Date(),
        updateAt: new Date(),
        description: formValue.description,
      };
      this.itemService.addItem(newItem);
      this.checkoutForm.reset();
      this.router.navigate(['/item-list']);
    }
    else {
      console.log('form is wrong');
    }

  }

}
