import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs";

import { DOCUMENT } from '@angular/common';
import { DirectionService } from '../direction.service';
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  host: {
    class: 'fill-screen'
  }
})

export class MainNavComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  isDrawerOpen: boolean = false;
  isRtl: boolean;
  public selectedLanguage: string = 'en';
  public selectedTheme: string = 'light';
  public isDarkTheme: boolean = false;
  tooltipContentMode: string = '';
  tooltipContentLanguage: string = '';

  constructor(
    public translateService: TranslateService,
    private directionService: DirectionService,
    @Inject(DOCUMENT) private document: Document,
    private authService: AuthService,
    private router: Router,
    private render: Renderer2) {
    this.translateService.onLangChange.subscribe(() => {
      this.updateTooltipContent();
    });
  }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  openDrawer() {
    this.isDrawerOpen = true;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }

  changeTheme(themeValue: string) {
    if (themeValue !== this.selectedTheme) {
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
      this.selectedLanguage = lang;
      this.translateService.use(lang);
      this.directionService.toLanguageDirection(lang);
    }
  }

  toggleDarkMode(isDarkMode: boolean) {
    // Call this method when dark mode changes
    this.directionService.setDarkMode(isDarkMode);
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  updateTooltipContent() {
    this.tooltipContentMode = this.translateService.instant('main-nav.tooltip-mode');
    this.tooltipContentLanguage = this.translateService.instant('main-nav.tooltip-language');
  }
}