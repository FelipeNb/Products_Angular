import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
})
export class AngularMaterialModule { }
