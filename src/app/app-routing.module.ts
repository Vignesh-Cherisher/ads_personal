import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PluginAndFileManagerComponent } from './plugin-and-file-manager/plugin-and-file-manager.component';
import { UploadPluginsComponent } from './plugin-and-file-manager/upload-plugins/upload-plugins.component';
import { AvailablePluginsComponent } from './plugin-and-file-manager/available-plugins/available-plugins.component';
import { UploadFileComponent } from './plugin-and-file-manager/upload-file/upload-file.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'plugin-and-file-manager', pathMatch: 'full'
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'plugin-and-file-manager', component: PluginAndFileManagerComponent,
    children: [
      {
        path: 'upload-plugin',
        component:UploadPluginsComponent,
        // canActivate:[AuthGuard]
      },
      {
        path: '',
        component: AvailablePluginsComponent,
        // canActivate:[AuthGuard]
      },
      {
        path: 'upload-file',
        component: UploadFileComponent
        // canActivate:[AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
