import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadFileAndPluginComponent } from './dashboard/upload-file-and-plugin/upload-file-and-plugin.component';
import { WorkspaceComponent } from './dashboard/workspace/workspace.component';
import { LoginComponent } from './Authentication/login/login.component';
import { AuthGuard } from './Authentication/auth.guard';
import { RegisterComponent } from './Authentication/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    // canActivate:[AuthGuard],
    children: [
      {
        path: 'plugin-file-view',
        component: UploadFileAndPluginComponent,
        // canActivate:[AuthGuard]
      },
      {
        path: 'chart-view',
        component: WorkspaceComponent,
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
