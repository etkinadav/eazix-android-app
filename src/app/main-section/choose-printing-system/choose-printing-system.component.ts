import { Component, OnInit, OnDestroy } from '@angular/core';
import { DirectionService } from '../../direction.service';
import { Subscription } from 'rxjs';
import { DataSharingService } from '../data-shering-service/data-sharing.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-choose-printing-system',
  templateUrl: './choose-printing-system.component.html',
  styleUrls: ['./choose-printing-system.component.css'],
  host: {
    class: 'fill-screen'
  }
})

export class ChoosePrintingSystemComponent implements OnInit, OnDestroy {
  isRTL = false;
  private directionSubscription: Subscription;
  isDarkMode: boolean = true;
  public printingService: string = '';
  private printingServiceSubscription: Subscription;
  continueToServiceText: string = '';

  constructor(
    private directionService: DirectionService,
    private dataSharingService: DataSharingService,
    private router: Router,
    private translateService: TranslateService
  ) {
    this.translateService.onLangChange.subscribe(() => {
      this.updateTranslation();
    });
  }

  ngOnInit() {
    this.directionSubscription = this.directionService.direction$.subscribe(direction => {
      this.isRTL = direction === 'rtl';
    });

    this.directionService.isDarkMode$.subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode;
    });

    this.printingServiceSubscription = this.dataSharingService.getPrintingService().subscribe((value) => {
      this.printingService = value;
    });

    this.dataSharingService.getPrintingService().subscribe(
      (value) => {
        if (this.printingService === "express" || this.printingService === "plotter" || this.printingService === "ph") {
          this.printingService = value;
        }
      },
      (error) => {
        this.router.navigate(['/']);
      }
    );
  }

  ngOnDestroy() {
    this.directionSubscription.unsubscribe();
  }

  onChoosePrintingService(value: string) {
    if (value === "express" || value === "plotter" || value === "ph") {
      this.printingService = value;
      this.updateTranslation()
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

  updateTranslation() {
    this.continueToServiceText = this.translateService.instant('choose-system.btn-tooltip-' + this.printingService);
  }
}
