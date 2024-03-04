import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadFileAndPluginComponent } from './dashboard/upload-file-and-plugin/upload-file-and-plugin.component';
import { WorkspaceComponent } from './dashboard/workspace/workspace.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      {
        path: 'plugin-file-view',
        component: UploadFileAndPluginComponent
      },
      {
        path: 'chart-view',
        component: WorkspaceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
