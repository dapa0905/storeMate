import { Component, OnInit } from '@angular/core';
import { NotificationServiceService, Notification } from '../../service/notification-service.service';
import { ItemServiceService } from '../../service/itemService.service';
import { Item } from '../../model/item.model';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  recentUpdates: Notification[] = [];
  totalItems: Item[] = [];

  constructor(
    private notifications: NotificationServiceService,
    private itemService: ItemServiceService,

  ){}

  ngOnInit(): void {

    this.notifications.notifications$.subscribe((notifications: Notification[]) => {
      this.recentUpdates = notifications;
    });

    this.itemService.items$.subscribe((items: Item[]) => {
      this.totalItems = items;
    })

  };

}
