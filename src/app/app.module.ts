import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule, provideOutlet } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';

@Component({
  selector: 'app-bottom-header-slot',
  template: '--- NOT IMPORTANT ---',
})
export class BottomHeaderSlotComponent {}

@NgModule({
  declarations: [AppComponent, BottomHeaderSlotComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
  ],
  providers: [
    provideOutlet({
      id: 'BottomHeaderSlot',
      component: BottomHeaderSlotComponent,
      // you should see a type error here and the build should fail
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
