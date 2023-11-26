import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { DOCUMENT } from '@angular/common';
import { DirectionService } from './direction.service';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  isRtl: boolean;

  constructor(private translate: TranslateService, private directionService: DirectionService, private authService: AuthService,
    @Inject(DOCUMENT) private document: Document,
    private render: Renderer2) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.authService.autoAuthUser();
    this.render.addClass(this.document.body, 'lightTheme');
    this.directionService.direction$.subscribe((direction) => {
      this.isRtl = direction === 'rtl';
    });
  }
}