import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
    AppContextService,
    AppErrorHandler,
    CoreServiceModule,
    DialogModule,
    GuidedPanelModule,
    IconModule,
    IdleModule,
    LoadingWheelModule,
    ResourceService,
    SmeUxModule,
    NavigationService
} from '@microsoft/windows-admin-center-sdk/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JhkimPortalComponent } from './jhkim-portal/jhkim-portal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Router } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        JhkimPortalComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        CoreServiceModule,
        CommonModule,
        BrowserModule,
        DialogModule,
        FormsModule,
        SmeUxModule,
        IconModule,
        LoadingWheelModule,
        GuidedPanelModule,
        IdleModule,
        AppRoutingModule,
    ],
    providers: [
        ResourceService,
        {
            provide: ErrorHandler,
            useClass: AppErrorHandler
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        private injector: Injector,
        private appContextService: AppContextService
    ) 
    {
        const router: Router = this.injector.get(Router);
        if (!router) {
            console.warn(`no router`);
        } else {
            console.warn(`yes router`);
        }
        const navigationService: NavigationService = this.injector.get(NavigationService);
        if (!navigationService) {
            console.warn(`no navigationService`);
        } else {
            console.warn(`yes navigationService`);
        }
        this.appContextService.initializeModule({});
    }
}
