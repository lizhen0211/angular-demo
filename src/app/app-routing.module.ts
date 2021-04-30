import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EchartDemoComponent} from './echart-demo/echart-demo.component';

const routes: Routes = [
  {path: '', redirectTo: 'echart-demo', pathMatch: 'full'},
  {
    path: 'echart-demo', component: EchartDemoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
