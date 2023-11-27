import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private printingServiceSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setPrintingService(value: string): void {
    this.printingServiceSubject.next(value);
  }

  getPrintingService(): Observable<string> {
    return this.printingServiceSubject.asObservable();
  }

  getBranches(): { name: string; number: number; systems: string[] }[] {
    return [
      { name: 'telhai', number: 1, systems: ['plotter', 'ph'] },
      { name: 'technion', number: 2, systems: ['plotter', 'ph'] },
      { name: 'hadarion', number: 3, systems: ['express', 'plotter', 'ph'] },
      { name: 'rupin', number: 4, systems: ['express', 'plotter'] },
      { name: 'tau', number: 5, systems: ['express', 'plotter', 'ph'] },
      { name: 'shenkar', number: 6, systems: ['plotter', 'ph'] },
      { name: 'minhal', number: 7, systems: ['plotter'] },
      { name: 'bezalel', number: 2, systems: ['plotter', 'ph'] },
      { name: 'emuna', number: 3, systems: ['plotter', 'ph'] },
      { name: 'shluha', number: 3, systems: ['express', 'plotter', 'ph'] },
      { name: 'nocturno', number: 3, systems: ['plotter'] },
      { name: 'sapir', number: 3, systems: ['plotter', 'ph'] },
      { name: 'sami', number: 3, systems: ['plotter'] }
    ];
  }
}
