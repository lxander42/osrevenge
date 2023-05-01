import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // Add other routes below this line
  { path: 'partList', component: DataTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
