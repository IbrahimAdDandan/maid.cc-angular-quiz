import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GeneralInterceptor } from './general.interceptor';

//#region Primeng modules
import { MessagesModule } from 'primeng/messages'
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { ProgressBarModule } from "primeng/progressbar";
import { PaginatorModule } from 'primeng/paginator';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserDetailsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MessagesModule,
    ToastModule,
    MenubarModule,
    ProgressBarModule,
    TableModule,
    PaginatorModule,
    ToolbarModule,
    ButtonModule,
    BreadcrumbModule,
    CardModule,
    InputTextModule
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GeneralInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
