import { Injectable } from '@angular/core';
import { ITEMS } from '../mock/items';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private itemsSubject = new BehaviorSubject<Item[]>(ITEMS);
  items$ = this.itemsSubject.asObservable();

  // 물품 전체 가져오기기
  getItems(): Observable<Item[]> {
    return this.items$;
  }

  // 특정 물품(ID 기준으로)만 가져오기기
  getItemById(itemId: number): Observable<Item | undefined> {
    return new Observable((observer) => {
      const item = this.itemsSubject.getValue().find((i) => i.itemId === itemId);
      
      if(!item){
        observer.error(new Error(`Item with ID ${itemId} not found`))
      }
      else {
        observer.next(item);
      }
      observer.complete();
    });
  }

  // 물품 추가
  addItem(addItem: Item): void{
    const updatedItems = [...this.itemsSubject.getValue(), addItem];
    this.itemsSubject.next(updatedItems);
  }

  // 물품 수정 
  updateItem(updatedItem: Item):void {
    const updatedItems = this.itemsSubject.getValue().map((item) => 
      item.itemId === updatedItem.itemId ? updatedItem : item);
    this.itemsSubject.next(updatedItems);
  }

  // 물품 삭제
  deleteItem(itemId: number): void {
    const updatedItems = this.itemsSubject.getValue().filter((item) => item.itemId !== itemId);
    this.itemsSubject.next(updatedItems);
  }

}
