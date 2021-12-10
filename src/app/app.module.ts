import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HomeComponent} from "./home/home.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";

import { NavBarModule } from "./nav-bar/nav-bar.module";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        // NavBarComponent, since it is now a module it goes in imports
    ],
    imports: [
        // BrowserModule imported once, configures the app for the browser
        BrowserModule,
        AppRoutingModule,
        NavBarModule,
        NoopAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
