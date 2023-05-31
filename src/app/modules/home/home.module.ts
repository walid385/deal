import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FollowComponent } from './components/follow/follow.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { TimerComponent } from './components/timer/timer.component';
import { SponsorComponent } from './components/sponsors/sponsors.component';
import { SmoothScrollDirective } from './components/nav/smooth-scroll.directive';


@NgModule({
  declarations: [
  
    HomeComponent,
       HeaderComponent,
       AboutComponent,
       FollowComponent,
       MainComponent,
       NavComponent,
       SmoothScrollDirective,
       TimerComponent,
       SponsorComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
