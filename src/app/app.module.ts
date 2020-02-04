import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module/demo-material-module.module';
import { Routes, RouterModule } from '@angular/router';
import { TableOverviewExampleComponent } from './table-overview-example/table-overview-example.component';
import { TableOverviewExampleModule } from './table-overview-example/table-overview-example.module';


const appRoutes: Routes = [
  { path: 'people-page', component: TableOverviewExampleComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    TableOverviewExampleModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
