import { Component, OnInit, OnDestroy } from '@angular/core';
import { DirectionService } from '../../direction.service';
import { Subscription } from 'rxjs';
import { DataSharingService } from '../data-shering-service/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-printing-system',
  templateUrl: './choose-printing-system.component.html',
  styleUrls: ['./choose-printing-system.component.css'],
  host: {
    class: 'fillScreen'
  }
})

export class ChoosePrintingSystemComponent implements OnInit, OnDestroy {
  isRTL = false; // Flag to track the current direction
  private directionSubscription: Subscription;
  isDarkMode: boolean = true;
  public printingService: string = '';

  constructor(private directionService: DirectionService, private dataSharingService: DataSharingService, private router: Router) { }

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

  onChoosePrintingService(value: string) {
    if (value === "express" || value === "plotter" || value === "ph") {
      this.printingService = value;
    }
  }

  isPrintingServiceEmpty(): boolean {
    return this.printingService === '';
  }

  onUserStep() {
    if (this.printingService === "express" || this.printingService === "plotter" || this.printingService === "ph") {
      this.setUserValue(this.printingService);
      this.router.navigate(['/branch']);
    }
  }

  setUserValue(value: string): void {
    this.dataSharingService.setPrintingService(value);
  }
}
