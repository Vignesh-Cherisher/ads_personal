import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PluginAndFileManagerComponent } from './plugin-and-file-manager/plugin-and-file-manager.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'plugin-and-file-manager', pathMatch: 'full'
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'plugin-and-file-manager', component: PluginAndFileManagerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
