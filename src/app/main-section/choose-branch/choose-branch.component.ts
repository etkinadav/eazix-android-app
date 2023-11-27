import { Component, OnInit, OnDestroy } from '@angular/core';
import { DirectionService } from '../../direction.service';
import { Subscription } from 'rxjs';
import { DataSharingService } from '../data-shering-service/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-branch',
  templateUrl: './choose-branch.component.html',
  styleUrls: ['./choose-branch.component.css'],
  host: {
    class: 'fillScreen'
  }
})

export class ChooseBranchComponent implements OnInit, OnDestroy {
  isRTL = false;
  private directionSubscription: Subscription;
  isDarkMode: boolean = true;
  public printingService: string = '';
  private printingServiceSubscription: Subscription;
  public branch: string = '';
  public branches: { name: string; number: number; systems: string[] }[] = [];
  public filteredBranches: { name: string, number: number, systems: string[] }[] = [];

  constructor(private directionService: DirectionService, private dataSharingService: DataSharingService, private router: Router) { }

  ngOnInit() {
    this.directionSubscription = this.directionService.direction$.subscribe(direction => {
      this.isRTL = direction === 'rtl';
    });

    this.directionService.isDarkMode$.subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode;
      console.log("isDarkMode:!!" + this.isDarkMode)
    });

    this.printingServiceSubscription = this.dataSharingService.getPrintingService().subscribe((value) => {
      this.printingService = value;
      console.log("Printing service updated:", this.printingService);
    });

    this.dataSharingService.getPrintingService().subscribe(
      (value) => {
        if (this.printingService === "express" || this.printingService === "plotter" || this.printingService === "ph") {
          this.branch = value;
          console.log("printingService is");
          console.log(this.printingService);
        } else {
          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.router.navigate(['/']);
      }
    );

    this.branches = this.dataSharingService.getBranches();

    this.filteredBranches = this.branches.filter(branch => branch.systems.includes(this.printingService));
    console.log(this.filteredBranches);
  }

  ngOnDestroy() {
    this.directionSubscription.unsubscribe();
  }

  onChooseBranch(value: string) {
    const branch = this.branches.find(branch => branch.name === value);
    if (branch) {
      this.branch = value;
    }
  }

  isPrintingServiceEmpty(): boolean {
    return this.branch === '';
  }
}
