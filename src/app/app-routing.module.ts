import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactComponent } from './components/contact/contact.component'
import { LoginComponent } from './components/login/login.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component'

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'product/:id', component: ProductDetailPageComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
