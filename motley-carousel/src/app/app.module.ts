import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [BrowserModule],
  entryComponents: [ CarouselComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const carousel = createCustomElement(CarouselComponent, { injector });
    customElements.define('motley-carousel', carousel);
  }

  ngDoBootstrap() {}
}
