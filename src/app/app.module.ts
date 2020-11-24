import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SpinnerComponent } from './spinner/spinner.component';
import { TestComponent } from './test/test.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { DemoNgZorroAntdModule } from './ngzoro.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
  {
    provide: HTTP_INTERCEPTORS,useClass: LoadingInterceptor,multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
