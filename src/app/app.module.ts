import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {
    BrowserAnimationsModule,
    NoopAnimationsModule,
} from '@angular/platform-browser/animations'

import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatBadgeModule } from '@angular/material/badge'
import { MatMenuModule } from '@angular/material/menu'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatGridListModule } from '@angular/material/grid-list'
import { ReactiveFormsModule } from '@angular/forms'

import { HomePageComponent } from './pages/home-page/home-page.component'
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component'

import { ProductDetailCardComponent } from './components/product-detail-card/product-detail-card.component'
import { CartComponent } from './components/cart/cart.component'
import { ProductHeaderFilterComponent } from './components/product-header-filter/product-header-filter.component'
import { ProductComponent } from './components/product/product.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { ProductPopUpComponent } from './components/product-pop-up/product-pop-up.component'
import { LoginComponent } from './components/login/login.component'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomePageComponent,
        ProductDetailPageComponent,
        FooterComponent,
        ProductPopUpComponent,
        LoginComponent,
        NotFoundComponent,
        ProductDetailCardComponent,
        CartComponent,
        ProductHeaderFilterComponent,
        ProductComponent,
        AboutComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatIconModule,
        MatSlideToggleModule,
        MatButtonModule,
        HttpClientModule,
        MatDialogModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatBadgeModule,
        MatMenuModule,
        MatSelectModule,
        MatGridListModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
