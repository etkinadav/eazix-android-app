import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
  host: {
    class: 'fillScreen'
  }
})

export class MainSectionComponent {
  constructor() { }
}


// import { Component } from '@angular/core';
// import { TranslateService } from "@ngx-translate/core";

// @Component({
//   selector: 'app-main-section',
//   templateUrl: './main-section.component.html',
//   styleUrls: ['./main-section.component.css'],
//   host: {
//     class: 'fillScreen'
//   }
// })

// export class MainSectionComponent {
//   isDrawerOpen: boolean = false;
//   isRtl: boolean;
//   public selectedLanguage: string = 'en';
//   public selectedTheme: string = 'light';
//   public isDarkTheme: boolean = false;

//   constructor(public translate: TranslateService) {
//     this.selectedLanguage = 'en';
//     this.translate.use('en');
//   }
// }


// import { OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';

// export class MainSectionComponent implements OnInit, OnDestroy {
//   screenWidthInPx: number = 0;
//   screenHeightInPx: number = 0;
//   @ViewChild('articleElements', { static: true }) articleElements: ElementRef;

//   constructor(private renderer: Renderer2) { }

//   ngOnInit() {
//     this.updateScreenSize();
//     window.addEventListener('resize', this.onResize.bind(this));
//   }

//   ngOnDestroy() {
//     window.removeEventListener('resize', this.onResize.bind(this));
//   }

//   updateScreenSize() {
//     this.screenWidthInPx = window.innerWidth;
//     this.screenHeightInPx = window.innerHeight;
//     const sectionCount = Math.floor(this.screenWidthInPx * 0.007);

//     const divElement: HTMLDivElement = this.articleElements.nativeElement;

//     const oldArticles = this.articleElements.nativeElement.querySelectorAll('article');

//     oldArticles.forEach(article => {
//       while (article.firstChild) {
//         article.removeChild(article.firstChild);
//       }
//     });

//     for (let j = 0; j < 3; j++) {
//       const newArticle = this.renderer.createElement('article');
//       this.renderer.appendChild(divElement, newArticle);
//     }

//     const articles = this.articleElements.nativeElement.querySelectorAll('article');

//     articles.forEach(article => {
//       while (article.firstChild) {
//         article.removeChild(article.firstChild);
//       }
//     });

//     for (let j = 0; j < 3; j++) {
//       const thisArticle = articles[j];
//       for (let i = 0; i < sectionCount; i++) {
//         const section = this.renderer.createElement('section');
//         this.renderer.appendChild(thisArticle, section);
//       }
//     }
//   }

//   onResize() {
//     this.updateScreenSize();
//   }
// }





