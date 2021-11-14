import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { CarComponent } from './car/car.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { RentalComponent } from './rental/rental.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'brand', component: BrandComponent },
      { path: 'rentals', component: RentalComponent },
      { path: 'cars', component: CarComponent },
      { path: 'cars/brand/:brandId', component: CarComponent },
      { path: 'cars/color/:colorId', component: CarComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
