import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { CpuComponent } from './components/body/cpu/cpu.component';
import { RamComponent } from './components/body/ram/ram.component';
import { ComponentShowHideService } from './services/component-show-hide.service';
import { HttpService } from './services/http.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    BodyComponent,
    CpuComponent,
    RamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient
  ],
  providers: [
    ComponentShowHideService,
    HttpService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
