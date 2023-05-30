import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FollowComponent } from './components/follow/follow.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { SponsorComponent } from './components/sponsors/sponsors.component';
import { TimerComponent } from './components/timer/timer.component';


const routes: Routes = [
{ path: '', component: HomeComponent, 
children: [
{ path: 'about', component: AboutComponent},
{ path: 'follow', component: FollowComponent},
{ path: 'header', component: HeaderComponent},
{ path: 'main', component: MainComponent},
{ path: 'nav', component: NavComponent},
{ path: 'sponsor', component: SponsorComponent},
{ path: 'timer', component: TimerComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full'}

]}
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
