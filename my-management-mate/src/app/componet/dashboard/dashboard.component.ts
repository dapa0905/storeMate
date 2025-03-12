import { Component, OnInit } from '@angular/core';
import { NotificationServiceService, Notification } from '../../service/notification-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  recentUpdates: Notification[] = [];

  constructor(
    private notifications: NotificationServiceService,
  ){}

  ngOnInit(): void {
    this.notifications.notifications$.subscribe((notifications: Notification[]) => {
      this.recentUpdates = notifications;
    });
  };

}
