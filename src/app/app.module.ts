import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EchartDemoComponent} from './echart-demo/echart-demo.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { ChartjsDemoComponent } from './chartjs-demo/chartjs-demo.component';
import { CookieDemoComponent } from './cookie-demo/cookie-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    EchartDemoComponent,
    ChartjsDemoComponent,
    CookieDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
