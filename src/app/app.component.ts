import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {LogoApiService} from './shared/services/logo-api.service';
import {NgForOf, NgIf} from '@angular/common';
import {MatAnchor} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatAnchor, RouterLink, NgIf, NgForOf, TranslateModule, LanguageSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Eventify';
  logoUrl: string = '';
  options = [
    { title: 'Toolbar.home', path: '/home' },
    { title: 'Toolbar.RatingCheck', path: '/engagement/ratings/new' }
  ];

  constructor(private logoApiService: LogoApiService,translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('en');
  }

  ngOnInit(): void {
    const domain = 'eventify.io';
    this.logoUrl = this.logoApiService.getUrlToLogo(domain);
  }
}
