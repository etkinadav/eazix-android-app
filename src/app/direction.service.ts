import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

    private translations: any = {}; // Store translations here

    private isDarkModeSubject = new BehaviorSubject<boolean>(false);
    isDarkMode$: Observable<boolean> = this.isDarkModeSubject.asObservable();

    constructor(private http: HttpClient) {
        // Fetch translations from a backend or load translations locally
        this.loadTranslations();
    }

    toggleDirection() {
        const newDirection = this.directionSubject.value === 'ltr' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', newDirection);
        this.directionSubject.next(newDirection);
    }

    toLanguageDirection(lang: string) {
        if (this.LTRLanguages.includes(lang)) {
            if (!this.LTRLanguages.includes(this.currenLanguage)) {
                this.currenLanguage = lang;
                this.toggleDirection();
            }
        } else {
            if (this.LTRLanguages.includes(this.currenLanguage)) {
                this.currenLanguage = lang;
                this.toggleDirection();
            }
        }
    }

    setDarkMode(isDarkMode: boolean) {
        this.isDarkModeSubject.next(isDarkMode);
    }

    loadTranslations() {
        // Load translations using HttpClient or set them locally
        // Example using HttpClient:
        this.http.get<any>('assets/translations.json').subscribe(data => {
            this.translations = data;
        });
    }

    translate(key: string): string {
        // Translate a given key using loaded translations
        return this.translations[key] || key; // Return key as translation if not found
    }
}