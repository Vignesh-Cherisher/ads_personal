import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PluginAndFileManagerComponent } from './plugin-and-file-manager/plugin-and-file-manager.component';
import { UploadPluginsComponent } from './plugin-and-file-manager/upload-plugins/upload-plugins.component';
import { AvailablePluginsComponent } from './plugin-and-file-manager/available-plugins/available-plugins.component';
import { UploadFileComponent } from './plugin-and-file-manager/upload-file/upload-file.component';
import { FileHistoryComponent } from './header/file-history/file-history.component';
import { SavedFilesComponent } from './plugin-and-file-manager/saved-files/saved-files.component';
import { DashboardWidgetPickerComponent } from './dashboard/dashboard-widget-picker/dashboard-widget-picker.component';
import { DashboardWidgetConfigurationComponent } from './dashboard/dashboard-widget-configuration/dashboard-widget-configuration.component';
import { ChartService } from './Services/Chart.service';
import { FormsModule } from '@angular/forms';
import { WidgetConfigurationsComponent } from './dashboard/dashboard-widget-configuration/widget-configurations/widget-configurations.component';
import { DashboardCanvasComponent } from './dashboard/dashboard-canvas/dashboard-canvas.component';
import { DashboardWidgetsComponent } from './dashboard/dashboard-canvas/dashboard-widgets/dashboard-widgets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvailablePluginsComponent,
    UploadPluginsComponent,
    DashboardComponent,
    UploadPluginsComponent,
    UploadFileComponent,
    SavedFilesComponent,
    FileHistoryComponent,
    PluginAndFileManagerComponent,
    DashboardWidgetPickerComponent,
    DashboardWidgetConfigurationComponent,
    WidgetConfigurationsComponent,
    DashboardCanvasComponent,
    DashboardWidgetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
