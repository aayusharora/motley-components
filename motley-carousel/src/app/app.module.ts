import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button/button.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [ButtonComponent, CarouselComponent],
  imports: [BrowserModule],
  entryComponents: [ButtonComponent, CarouselComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    const carousel = createCustomElement(CarouselComponent, { injector });
    customElements.define('custom-button', customButton);
    customElements.define('custom-carousel', carousel);
  }

  ngDoBootstrap() {}
}
