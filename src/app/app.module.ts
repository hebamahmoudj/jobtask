import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialmoduleModule } from './materialmodule/materialmodule.module';
import { HomeUsersComponent } from './components/home-users/home-users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { SearchPipe } from './core/pipes/search.pipe'
import { LoaderInterceptor } from './core/interceptores/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeUsersComponent,
    UserdetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialmoduleModule,HttpClientModule,FormsModule,
    NgxSpinnerModule 
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
