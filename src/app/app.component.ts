// app.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import {SevicoComponent} from './sevico/sevico.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, ContactFormComponent, AboutUsComponent, FooterComponent, SevicoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "ADVOCACIA"
}
