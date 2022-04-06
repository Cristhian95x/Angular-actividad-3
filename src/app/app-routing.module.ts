import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSeriesComponent } from './series/list-series/list-series.component';
import { ListBiografiasComponent } from './series/list-biografias/list-biografias.component';

const routes: Routes = [
  {
    path:'seriesList',
    component: ListSeriesComponent
  },
  {
    path:'biografiasList',
    component:ListBiografiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
