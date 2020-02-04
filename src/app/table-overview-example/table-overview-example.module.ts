import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOverviewExampleComponent } from './table-overview-example.component';
import { DemoMaterialModule } from '../demo-material-module/demo-material-module.module';

@NgModule({
  declarations: [TableOverviewExampleComponent],
  imports: [
    CommonModule,
    DemoMaterialModule
  ],
  exports: [
    TableOverviewExampleComponent
  ]
})
export class TableOverviewExampleModule { }
