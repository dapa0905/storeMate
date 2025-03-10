import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './componet/item-list/item-list.component';
import { DashboardComponent } from './componet/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashBoard', pathMatch: 'full'},
  { path: 'dashBoard', component: DashboardComponent},
  { path: 'item-list', component: ItemListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
