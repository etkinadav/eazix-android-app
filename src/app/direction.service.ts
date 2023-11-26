import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DirectionService {
    private directionSubject = new BehaviorSubject<'ltr' | 'rtl'>('ltr');
    direction$ = this.directionSubject.asObservable();
    private currenLanguage: string = 'en';
    private LTRLanguages = [
        'en', 'es', 'de', 'fr'
    ]

    toggleDirection() {
        const newDirection = this.directionSubject.value === 'ltr' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', newDirection);
        this.directionSubject.next(newDirection);
    }

    toLanguageDirection(lang: string) {
        if (this.LTRLanguages.includes(lang)) {
            console.log('lang is LTRLanguages');
            if (!this.LTRLanguages.includes(this.currenLanguage)) {
                this.currenLanguage = lang;
                this.toggleDirection();
            }
        } else {
            console.log('lang is not LTRLanguages');
            if (this.LTRLanguages.includes(this.currenLanguage)) {
                this.currenLanguage = lang;
                this.toggleDirection();
            }
        }
    }
}