import { Injectable } from '@angular/core';
import { ITEMS } from '../mock/items';
import { BehaviorSubject, Observable , of} from 'rxjs';
import { Item } from '../model/item.model';
import { NotificationServiceService } from './notification-service.service';
import { AuthServiceService } from './authService.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private itemsSubject = new BehaviorSubject<Item[]>(ITEMS);
  items$ = this.itemsSubject.asObservable();

  constructor(
    private notificationService: NotificationServiceService,
    private authService: AuthServiceService,

  ){}

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
    this.notificationService.addNotification(`${addItem.itemName} is upload!`, 'info', addItem.itemId);
  }

  // 물품 수정 
  updateItem(updatedItem: Item): Observable<void> {
    const updatedItems = this.itemsSubject.getValue().map((item) => 
      item.itemId === updatedItem.itemId ? updatedItem : item);
    this.itemsSubject.next(updatedItems);
    return of(void 0);
  }

  // 물품 삭제
  deleteItem(itemId: number): void {
    const updatedItems = this.itemsSubject.getValue().filter((item) => item.itemId !== itemId);
    this.itemsSubject.next(updatedItems);
  }

  // 물품 구독
  renterItem(item: Item, user: User): Observable<void>{
    console.log('renterItem is success')
    return of (void 0);
  }


}
