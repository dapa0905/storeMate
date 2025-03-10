import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})

export class NotificationServiceService {

  private notification: Notification[] = [];
  private notificationSubject = new Subject<Notification>();

  public notification$ = this.notificationSubject.asObservable();


  // 알람 등록 메서드
  addNotification(message: string, type: 'success' | 'error' | 'info'){
    const notification: Notification = {
      message, type, timestamp: new Date(),
    };
    this.notification.push(notification);
    this.notificationSubject.next(notification);
    this.notificationSubject.complete();
  }

  // 알람 가져오는 메서드
  getNotifications(): Notification[] {
    return this.notification;
  };

}
