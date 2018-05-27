import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef, AfterViewInit
} from '@angular/core';


@Component({
  selector: 'custom-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class CarouselComponent implements AfterViewInit {
  element;
  cssConfig: object;
  cardArray;
  currentPos = 0;
  recurrentPos = 0;
  @ViewChild('carousel') carousel: ElementRef;
  constructor() {
    this.element = '';
    this.cssConfig = {};
  }


  ngAfterViewInit() {
    console.log(this.carousel.nativeElement.childNodes);
    this.cardArray = [].slice.call(this.carousel.nativeElement.childNodes);
    let obj;
    this.cardArray = this.cardArray.map((card, i) => {
      obj =  {
        card: card,
        cssConfig: {},
        index: i
      };
      return obj;
    });
 }

  nextEle() {
    this.cardArray.forEach(obj => {
            if (obj.index > -3 && obj.index <= 1) {
              this.translateX(obj, -100);
            }
            if (obj.index > 1 && obj.index <= 3) {
              this.scaleY(obj);
            }

            this.reduceIndex(obj);
    });

  }

  prevEle() {
    this.cardArray.forEach(obj => {
      if (obj.index > -3 && obj.index <= 0) {
        this.retranslateX(obj);
      }
      if(obj.index > 1 && obj.index <= 3) {
        this.reScaleY(obj);
      }

      this.increaseIndex(obj);
    });

  }

  reduceIndex(obj) {
    obj['index'] = obj.index - 1;
    console.log(obj.index);
  }

  increaseIndex(obj) {
    obj['index'] = obj.index + 1;
    console.log(obj.index);
  }

  translateX(obj, val) {
    this.currentPos = val;
      const transform = ( obj.cssConfig.transform || 0 ) - 100 ;
      obj.card.style.transform = `translateX(${transform }%)`;
      obj.card.style.transition = '.8s';
      obj.cssConfig.transform = transform;
  }

  reScaleY(ele) {
    if (ele.index === 2) {
      ele.card.style.height = '239px';
      ele.card.style.transform = 'translateY(20%)';
      ele.card.style.transition = '.8s';
    }
    if (ele.index === 3) {
      ele.card.style.height = '142px';
      ele.card.style.transform = 'translateY(72%)';
      ele.card.style.transition = '.8s';
    }

  }

  scaleY(ele) {
    console.log(ele);
     if (ele.index === 2) {
       ele.card.style.height = '325px';
       ele.card.style.transform = 'none';
       ele.card.style.transition = '.8s';
     }
     if (ele.index === 3) {
       ele.card.style.height = '239px';
       ele.card.style.transform = 'translateY(20%)';
       ele.card.style.transition = '.8s';
     }

  }

  retranslateX(obj) {
    console.log(obj.cssConfig.transform + 100);
    this.recurrentPos = ( obj.cssConfig.transform + 100 || 0 );
      obj.card.style.transform = `translateX(${this.recurrentPos}%)`;
      obj.card.style.transition = '.8s';
      obj.cssConfig.transform = this.recurrentPos;
      console.log(this.recurrentPos);
  }

}



