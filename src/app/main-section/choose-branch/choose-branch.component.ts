import { Component, OnInit, OnDestroy } from '@angular/core';
import { DirectionService } from '../../direction.service';
import { Subscription } from 'rxjs';
import { DataSharingService } from '../data-shering-service/data-sharing.service';

@Component({
  selector: 'app-choose-branch',
  templateUrl: './choose-branch.component.html',
  styleUrls: ['./choose-branch.component.css'],
  host: {
    class: 'fillScreen'
  }
})

export class ChooseBranchComponent implements OnInit, OnDestroy {
  isRTL = false; // Flag to track the current direction
  private directionSubscription: Subscription;
  isDarkMode: boolean = true;
  public printingService: string = '';
  public branch: string = '';
  public branches: { name: string; number: number; address: string }[] = [];

  constructor(private directionService: DirectionService, private dataSharingService: DataSharingService) { }

  ngOnInit() {
    this.directionSubscription = this.directionService.direction$.subscribe(direction => {
      this.isRTL = direction === 'rtl';
    });

    this.directionService.isDarkMode$.subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode;
      console.log("isDarkMode:!!" + this.isDarkMode)
    });

    this.dataSharingService.getPrintingService().subscribe((value) => {
      this.printingService = value;
      console.log("YESS!" + this.printingService)
    });

    this.branches = this.dataSharingService.getBranches();
  }

  ngOnDestroy() {
    this.directionSubscription.unsubscribe();
  }

  onChooseBranch(value: string) {
    if (value === "branch1" || value === "branch2" || value === "branch3") {
      this.branch = value;
      console.log("branch is: " + this.branch);
    }
  }

  isPrintingServiceEmpty(): boolean {
    return this.branch === '';
  }

  // getPrintingSystem(): string {
  //   // Check printingService value and return content accordingly
  //   if (this.printingService === 'express') {
  //     return 'express';
  //   } else if (this.printingService === 'plotter') {
  //     return 'plotter';
  //   } else if (this.printingService === 'ph') {
  //     return 'ph';
  //   } else {
  //     return '';
  //   }
  // }
}
