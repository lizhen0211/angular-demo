import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EchartDemoComponent} from './echart-demo/echart-demo.component';
import {ChartjsDemoComponent} from './chartjs-demo/chartjs-demo.component';

const routes: Routes = [
  {path: '', redirectTo: 'chartjs', pathMatch: 'full'},
  {
    path: 'echart-demo', component: EchartDemoComponent
  }, {
    path: 'chartjs', component: ChartjsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
