import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { AdminComponent } from './header/admin/admin.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { UserDetailsComponent } from './header/admin/user-details/user-details.component';
import { SubscribeService } from './Services/subscribe.service';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './Services/User.service';
import { LoggerService } from './Services/logger.service';

export const USER_TOKEN =new InjectionToken<UserService>('USER_SERVICE');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    HeroComponent,
    SidebarComponent,
    UserDetailsComponent,
    UserListComponent
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SubscribeService,
    {provide:USER_TOKEN , useClass:UserService},LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
