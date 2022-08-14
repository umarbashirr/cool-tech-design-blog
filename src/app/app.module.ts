import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { SingleBlogComponent } from './components/home/blogs/single-blog/single-blog.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { AddPostComponent } from './views/add-post/add-post.component';
import { SingleBlogPostComponent } from './views/single-blog-post/single-blog-post.component';
import { UpdatePostPageComponent } from './views/update-post-page/update-post-page.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PageHeroComponent } from './components/page-hero/page-hero.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NumberTransformPipe } from './pipes/number-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    SingleBlogComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AddPostComponent,
    SingleBlogPostComponent,
    UpdatePostPageComponent,
    PostFormComponent,
    PageHeroComponent,
    RegisterComponent,
    LoginComponent,
    NumberTransformPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
