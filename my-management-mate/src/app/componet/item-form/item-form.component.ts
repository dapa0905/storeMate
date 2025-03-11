import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../service/itemService.service';
import { ItemCategory } from '../../enum/category.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../model/item.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  standalone: false,
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent implements OnInit{
  
  checkoutForm!: FormGroup;
  categories = Object.values(ItemCategory);
  isEditMode!: boolean;
  itemId: number | null = null;

  constructor(
    private itemService: ItemServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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

    this.route.paramMap.subscribe(params => {
      this.itemId = +params.get('id')!;
      if(this.itemId) {
        this.isEditMode = true;
        this.loadItemData();
      }
    });
  }

  loadItemData(): void {
    this.itemService.getItemById(this.itemId!).subscribe(item => {
      if (item) {
        this.checkoutForm.patchValue({
          itemName: item.itemName,
          category: item.category,
          quantity: item.quantity,
          price: item.price,
          description: item.description
        });
      }
    });
  }
  
  onSubmit():void {

    if(this.checkoutForm.invalid){
      return;
    }
    
    const formValue = this.checkoutForm.value;

    if(this.isEditMode && this.itemId) {
      const updatedItem: Item = { ...formValue, itemId: this.itemId };
      this.itemService.updateItem(updatedItem).subscribe(() => {
        this.router.navigate(['/item-list']); 
      });
    }

    else {
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
      this.router.navigate(['/item-list']);
    }
  }

  onEditMode(): void {
    this.isEditMode = true;
  }

  onAddMode(): void {
    this.isEditMode = false;
    this.checkoutForm.reset();
  }
  

}
