import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EPipe } from './elipses.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    EditProfileComponent,
    EPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'edit', component: EditProfileComponent },
      {path:'addToCart',loadChildren: ()=>import(`./components/addToCart/addToCart.module`).then(m=>m.AddToCartModule) },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
     
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
