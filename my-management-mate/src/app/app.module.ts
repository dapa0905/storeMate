import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componet/header/header.component';
import { FooterComponent } from './componet/footer/footer.component';
import { ItemListComponent } from './componet/item-list/item-list.component';
import { ItemDetailComponent } from './componet/item-detail/item-detail.component';
import { ItemFormComponent } from './componet/item-form/item-form.component';
import { LoginComponent } from './componet/login/login.component';
import { DashboardComponent } from './componet/dashboard/dashboard.component';
import { NotificationsComponent } from './componet/notifications/notifications.component';
import { ItemServiceService } from './service/itemService.service';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemFormComponent,
    LoginComponent,
    DashboardComponent,
    NotificationsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ItemServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
