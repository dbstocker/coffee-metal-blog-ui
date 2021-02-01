/* Angular Imports */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* NGX Bootstrap Imports */
import { CollapseModule } from 'ngx-bootstrap/collapse';

/* FontAwesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* App Module Imports */
import { AppRoutingModule } from './app-routing.module';

/* App Component Imports */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostViewComponent } from './posts/post-view/post-view.component';
import { PostLinksComponent } from './posts/post-links/post-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostViewComponent,
    PostLinksComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CollapseModule.forRoot(),
    FontAwesomeModule
  ],
  exports: [ // <-- is this correct?
    BrowserAnimationsModule,
    CollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
