import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  interval,
  Observable,
  startWith,
  Subject,
  switchMap,
  timer,
} from 'rxjs';
interface SlideInterface {
  url: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  slides: SlideInterface[] = [

  ];

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.slides = [{ url: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=50/media/photos/20727ada-07d4-40a5-a485-332772262515-retina-large-jpeg', title: 'beach' },
    { url: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=50/media/photos/068518a7-733e-4cf5-8645-497add0a0825-retina-large-jpeg', title: 'boat' },
    { url: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=50/media/photos/9573db8f-cb17-409d-b1b8-529861d9e092-retina-large-jpeg', title: 'forest' },
    { url: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=50/media/photos/8a3b1a85-9e45-4d78-8b52-b1eaf33d0c96-retina-large-jpeg', title: 'city' },
    ]
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 10000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
}
