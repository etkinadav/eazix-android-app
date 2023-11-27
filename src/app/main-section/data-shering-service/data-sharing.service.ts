import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private printingServiceSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private branches: string[] = ["rupin", "bezalelarc", "unitlv"];

  setPrintingService(value: string): void {
    this.printingServiceSubject.next(value);
  }

  getPrintingService(): Observable<string> {
    return this.printingServiceSubject.asObservable();
  }

  // getBranches(): string[] {
  //   return this.branches;
  // }

  getBranches(): { name: string; number: number; address: string }[] {
    return [
      { name: 'rupin', number: 1, address: 'address-rupin' },
      { name: 'bezalelarch', number: 2, address: 'address bezalelarch' },
      { name: 'unitlv', number: 3, address: 'address-unitlv' },
    ];
  }
}
