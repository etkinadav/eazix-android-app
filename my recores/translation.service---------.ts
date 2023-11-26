import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    constructor(private translateService: TranslateService) {
        // Initialize default language
        this.translateService.setDefaultLang('en'); // Set your default language

        // Optionally set the current language based on user preferences or stored settings
        // this.translateService.use('en');
    }

    // Method to switch language
    switchLanguage(lang: string) {
        this.translateService.use(lang);
    }
}

