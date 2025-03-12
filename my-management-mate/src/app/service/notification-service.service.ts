import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})

export class NotificationServiceService {

  private notifications: Notification[] = [];
  private notificationSubject = new BehaviorSubject<Notification[]>([]);

  public notifications$ = this.notificationSubject.asObservable();


  // 알람 등록 메서드
  addNotification(message: string, type: 'success' | 'error' | 'info'){
    const notification: Notification = {
      message, type, timestamp: new Date(),
    };

    this.notifications.unshift(notification);
    if(this.notifications.length > 5) {
      this.notifications.pop();
    };
    // console.log('notification-service-ok!')
    this.notificationSubject.next([...this.notifications])
  }

  // 알람 가져오는 메서드
  getNotifications(): Notification[] {
    return this.notifications;
  };

}
