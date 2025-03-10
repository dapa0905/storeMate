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

  getItems(): Observable<Item[]> {
    return this.items$;
  }

  getItemById(itemId: number): Observable<Item | undefined> {
    return new Observable((observer) => {
      const item = this.itemsSubject.getValue().find((i) => i.itemId === itemId);
      observer.next(item);
      observer.complete();
    });
  }

}
