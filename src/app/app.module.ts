import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './dashboard/toolbar/toolbar.component';
import { AvailablePluginsComponent } from './dashboard/upload-file-and-plugin/available-plugins/available-plugins.component';
import { UploadPluginsComponent } from './dashboard/upload-file-and-plugin/upload-plugins/upload-plugins.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlPanelComponent } from './dashboard/control-panel/control-panel.component';
import { WorkspaceComponent } from './dashboard/workspace/workspace.component';
import { UploadFileAndPluginComponent } from './dashboard/upload-file-and-plugin/upload-file-and-plugin.component';
import { UploadFileComponent } from './dashboard/upload-file-and-plugin/upload-file/upload-file.component';
import { SavedFilesComponent } from './dashboard/upload-file-and-plugin/saved-files/saved-files.component';
import { ChartOptionsComponent } from './dashboard/control-panel/chart-options/chart-options.component';
import { ChartTabsComponent } from './dashboard/workspace/chart-tabs/chart-tabs.component';
import { FileHistoryComponent } from './header/file-history/file-history.component';
import { NavigationService } from './Services/navigationService.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    AvailablePluginsComponent,
    UploadPluginsComponent,
    DashboardComponent,
    ControlPanelComponent,
    WorkspaceComponent,
    UploadFileAndPluginComponent,
    UploadFileComponent,
    SavedFilesComponent,
    ChartOptionsComponent,
    ChartTabsComponent,
    FileHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
