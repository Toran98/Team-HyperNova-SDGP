import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BrandNewVehiclesComponent} from './brand-new-vehicles/brand-new-vehicles.component';
import { LogInComponent } from './log-in/log-in.component';
import { ALTOSAFETYComponent } from './alto-safety/alto-safety.component';
import { DAIHATSUROCKYComponent } from './daihatsu-rocky/daihatsu-rocky.component';
import { HYUNDAIKONAComponent } from './hyundai-kona/hyundai-kona.component';
import { HYUNDAIVENUEComponent } from './hyundai-venue/hyundai-venue.component';
import { KIANIROComponent } from './kia-niro/kia-niro.component';
import { KIASTONICComponent } from './kiastonic/kiastonic.component';
import { KWIDCLIMBERComponent } from './kwid-climber/kwid-climber.component';
import { MarutiSuzukiSPressoComponent } from './maruti-suzuki-s-presso/maruti-suzuki-s-presso.component';
import { TOYOTACOROLLASPORTComponent } from './toyota-corolla-sport/toyota-corolla-sport.component';
import { ToyotaRaizeComponent } from './toyota-raize/toyota-raize.component';
import { AudiComponent }  from './vehicles/audi/audi.component';
import { Audi2Component } from './vehicles/audi2/audi2.component';
import { Audi3Component } from './vehicles/audi3/audi3.component';
import { Audi4Component } from './vehicles/audi4/audi4.component';
import { Vehicle2Component } from "./vehicle2/vehicle2.component";

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'about', component : AboutUsComponent},
  { path : 'vehicle', component : VehiclesComponent},
  { path : 'bNvehicle', component : BrandNewVehiclesComponent},
  { path : 'login', component : LogInComponent },
  { path : 'altpsfety', component : ALTOSAFETYComponent },
  { path : 'drocky', component : DAIHATSUROCKYComponent },
  { path : 'hyKona', component : HYUNDAIKONAComponent },
  { path : 'hyVenue', component : HYUNDAIVENUEComponent },
  { path : 'kiaNiro', component : KIANIROComponent },
  { path : 'kiaStonic', component : KIASTONICComponent },
  { path : 'kwidClimber', component : KWIDCLIMBERComponent },
  { path : 'sPresso', component : MarutiSuzukiSPressoComponent },
  { path : 'corollaSport', component : TOYOTACOROLLASPORTComponent },
  { path : 'Traize', component : ToyotaRaizeComponent },
  { path : 'prePlusSedan', component : AudiComponent },
  { path : 'prestigeQattro4dr', component : Audi2Component },
  { path : 'prePlusQuttro', component : Audi3Component },
  { path : 'preqttroSedan', component : Audi4Component },
  { path : 'vehicle2', component : Vehicle2Component }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
