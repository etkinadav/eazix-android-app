import { Component, OnInit, OnDestroy } from '@angular/core';
import { DirectionService } from '../direction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
  host: {
    class: 'fillScreen'
  }
})

export class MainSectionComponent implements OnInit, OnDestroy {
  isRTL = false; // Flag to track the current direction
  private directionSubscription: Subscription;
  isDarkMode: boolean = true;

  constructor(private directionService: DirectionService) { }

  ngOnInit() {
    this.directionSubscription = this.directionService.direction$.subscribe(direction => {
      this.isRTL = direction === 'rtl';
    });

    this.directionService.isDarkMode$.subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode;
      console.log("isDarkMode:!!" + this.isDarkMode)
    });
  }

  ngOnDestroy() {
    this.directionSubscription.unsubscribe();
  }

  public printingService: string = '';

  onChoosePrintingService(value: string) {
    if (value === "express") {
      this.printingService = value;
    }
    if (value === "plotter") {
      this.printingService = value;
    }
    if (value === "ph") {
      this.printingService = value;
    }
  }
}
