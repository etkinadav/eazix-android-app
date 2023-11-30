import { Injectable, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreloginComponent } from "./auth/prelogin/prelogin.component";

@Injectable({
  providedIn: 'root'
})

export class ModalsService {
  constructor(
    private dialog: MatDialog
  ) { }

  onOpenLoginDialog(): void {
    console.log("openLoginDialog!!!!!!!!!!!!!!!!");
    const isMobile = window.innerWidth < 768; // Adjust this breakpoint as needed for your mobile view
    const dialogRef = this.dialog.open(PreloginComponent, {
      width: isMobile ? '95%' : '1015px',
      height: isMobile ? '70vh' : '490px',
      panelClass: 'custom-dialog-class', // Add a custom class for further styling
      position: isMobile ? { bottom: '0' } : undefined // Position from bottom for mobile view
    });
  }
}
