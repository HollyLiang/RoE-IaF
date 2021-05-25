import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatModule } from '../shared/mat.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [BrowserAnimationsModule, RouterModule, MatModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}
