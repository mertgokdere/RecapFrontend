import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { BrandComponent } from './brand/brand.component';
import { RentalComponent } from './rental/rental.component';
import { CarComponent } from './car/car.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../pipes/filter-pipe.pipe';

@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    FooterComponent,
    LayoutComponent,
    BrandComponent,
    RentalComponent,
    CarComponent,
    ColorComponent,
    FilterPipePipe,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
