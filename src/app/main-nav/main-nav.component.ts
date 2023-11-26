import { Component, ViewEncapsulation, Inject, Renderer2 } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

import { DOCUMENT } from '@angular/common';
import { DirectionService } from '../direction.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
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
      } else {
        this.isDarkTheme = true;
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
}






// example of screensize bihavior

// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map, shareReplay } from 'rxjs/operators';

// @Component({
//   selector: 'app-main-nav',
//   templateUrl: './main-nav.component.html',
//   styleUrls: ['./main-nav.component.css'],
//   encapsulation: ViewEncapsulation.None
// })
// export class MainNavComponent {
//   isHandset$: Observable<boolean>;
//   isRtl: boolean;
//   private currenLanguage: string = 'en';

//   constructor(private translate: TranslateService, private directionService: DirectionService, private breakpointObserver: BreakpointObserver, @Inject(DOCUMENT) private document: Document,
//     private render: Renderer2) {
//     this.isHandset$ = this.breakpointObserver.observe([
//       '(max-width: 767px)'
//     ]).pipe(
//       map(result => result.matches),
//       shareReplay()
//     );
//   }

//   changeTheme(themeValue: string) {
//     this.render.removeClass(this.document.body, 'lightTheme');
//     this.render.removeClass(this.document.body, 'darkTheme');
//     if (themeValue == 'light') {
//       this.render.addClass(this.document.body, 'lightTheme');
//     }
//     if (themeValue == 'dark') {
//       this.render.addClass(this.document.body, 'darkTheme');
//     }
//   }

//   goToLanguage(lang) {
//     if (lang === this.currenLanguage) {
//       console.log('still ' + lang + '!');
//     } else {
//       console.log('switching to ' + lang + '!');
//       this.currenLanguage = lang;
//       this.translate.use(lang);
//       this.directionService.toLanguageDirection(lang);
//     }
//   }
// }


