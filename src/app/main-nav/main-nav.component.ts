import { Component, ViewEncapsulation, Inject, Renderer2 } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

import { DOCUMENT } from '@angular/common';
import { DirectionService } from '../direction.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  host: {
    class: 'fill-screen'
  }
})

export class MainNavComponent {
  isDrawerOpen: boolean = false;
  isRtl: boolean;
  public selectedLanguage: string = 'en';
  public selectedTheme: string = 'light';
  public isDarkTheme: boolean = false;

  constructor(public translate: TranslateService, private directionService: DirectionService, @Inject(DOCUMENT) private document: Document,
    private render: Renderer2) { }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    console.log("toggleDrawer");
  }

  openDrawer() {
    this.isDrawerOpen = true;
    console.log("openDrawer");
  }

  closeDrawer() {
    this.isDrawerOpen = false;
    console.log("closeDrawer");
  }

  changeTheme(themeValue: string) {
    if (themeValue !== this.selectedTheme) {
      console.log('switching to ' + themeValue + ' Theme!');
      this.selectedTheme = themeValue;
      this.render.removeClass(this.document.body, 'lightTheme');
      this.render.removeClass(this.document.body, 'darkTheme');
      this.render.addClass(this.document.body, themeValue + 'Theme');
      if (this.isDarkTheme) {
        this.isDarkTheme = false;
        this.toggleDarkMode(false);
      } else {
        this.isDarkTheme = true;
        this.toggleDarkMode(true);
      }
    }
  }

  goToLanguage(lang) {
    if (lang !== this.selectedLanguage) {
      console.log('switching to ' + lang + ' Language!');
      this.selectedLanguage = lang;
      this.translate.use(lang);
      this.directionService.toLanguageDirection(lang);
    }
  }

  toggleDarkMode(isDarkMode: boolean) {
    // Call this method when dark mode changes
    this.directionService.setDarkMode(isDarkMode);
  }
}