import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
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
    SmeUxModule
} from '@microsoft/windows-admin-center-sdk/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JhkimPortalComponent } from './jhkim-portal/jhkim-portal.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    constructor(private appContextService: AppContextService) {
        this.appContextService.initializeModule({});
    }
}
