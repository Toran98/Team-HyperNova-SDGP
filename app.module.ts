import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrandNewVehiclesComponent } from './brand-new-vehicles/brand-new-vehicles.component';
import { LogInComponent } from './log-in/log-in.component';
import { ToyotaRaizeComponent } from './toyota-raize/toyota-raize.component';
import { HYUNDAIVENUEComponent } from './hyundai-venue/hyundai-venue.component';
import { KWIDCLIMBERComponent } from './kwid-climber/kwid-climber.component';
import { MarutiSuzukiSPressoComponent } from './maruti-suzuki-s-presso/maruti-suzuki-s-presso.component';
import { TOYOTACOROLLASPORTComponent } from './toyota-corolla-sport/toyota-corolla-sport.component';
import { DAIHATSUROCKYComponent } from './daihatsu-rocky/daihatsu-rocky.component';
import { HYUNDAIKONAComponent } from './hyundai-kona/hyundai-kona.component';
import { ALTOSAFETYComponent } from './alto-safety/alto-safety.component';
import { KIASTONICComponent } from './kiastonic/kiastonic.component';
import { KIANIROComponent } from './kia-niro/kia-niro.component';

import { AudiComponent } from './vehicles/audi/audi.component';
import { Audi2Component } from './vehicles/audi2/audi2.component';
import { Audi3Component } from './vehicles/audi3/audi3.component';
import { Audi4Component } from './vehicles/audi4/audi4.component';
import { Vehicle2Component } from './vehicle2/vehicle2.component';
import {VehiclesearchserviceService} from './service/vehiclesearchservice.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehiclesComponent,
    AboutUsComponent,
    BrandNewVehiclesComponent,
    LogInComponent,
    ToyotaRaizeComponent,
    HYUNDAIVENUEComponent,
    KWIDCLIMBERComponent,
    MarutiSuzukiSPressoComponent,
    TOYOTACOROLLASPORTComponent,
    DAIHATSUROCKYComponent,
    HYUNDAIKONAComponent,
    ALTOSAFETYComponent,
    KIASTONICComponent,
    KIANIROComponent,
    AudiComponent,
    Audi2Component,
    Audi3Component,
    Audi4Component,
    Vehicle2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [VehiclesearchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
