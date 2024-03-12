import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PluginAndFileManagerComponent } from './plugin-and-file-manager/plugin-and-file-manager.component';
import { DashboardWidgetPickerComponent } from './dashboard/dashboard-widget-picker/dashboard-widget-picker.component';
import { DashboardWidgetConfigurationComponent } from './dashboard/dashboard-widget-configuration/dashboard-widget-configuration.component';
import { DashboardCanvasComponent } from './dashboard/dashboard-canvas/dashboard-canvas.component';
import { BarAndLineChartWidgetComponent } from './dashboard/dashboard-canvas/bar-and-line-chart-widget/bar-and-line-chart-widget.component';
import { WidgetDataService } from './Services/widget-data.service';
import { PluginConfigurationsComponent } from './dashboard/dashboard-widget-configuration/plugin-configurations/plugin-configurations.component';
import { WidgetConfigurationsComponent } from './dashboard/dashboard-widget-configuration/widget-configurations/widget-configurations.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvailablePluginsComponent } from './plugin-and-file-manager/available-plugins/available-plugins.component';
import { UploadFileComponent } from './plugin-and-file-manager/upload-file/upload-file.component';
import { UploadPluginsComponent } from './plugin-and-file-manager/upload-plugins/upload-plugins.component';
import { HttpClientModule } from '@angular/common/http';
import { FileService } from './Services/file.service';
import { PluginService } from './Services/plugin.servive';
import { TableViewWidgetComponent } from './dashboard/dashboard-canvas/table-view-widget/table-view-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    PluginAndFileManagerComponent,
    AvailablePluginsComponent,
    UploadFileComponent,
    UploadPluginsComponent,
    DashboardWidgetPickerComponent,
    DashboardCanvasComponent,
    DashboardWidgetConfigurationComponent,
    BarAndLineChartWidgetComponent,
    PluginConfigurationsComponent,
    WidgetConfigurationsComponent,
    TableViewWidgetComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WidgetDataService,PluginService,FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
