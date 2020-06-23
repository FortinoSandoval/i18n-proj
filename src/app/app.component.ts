import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  availableLanguages: Array<String>;
  langSelected: string;
  translate: TranslateService;
  constructor(private translateService: TranslateService) {
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'en');
    }
    this.availableLanguages = [
      'en',
      'es'
    ];
    this.langSelected = localStorage.getItem('lang');
    this.translate = translateService;
    this.translate.setDefaultLang(localStorage.getItem('lang'));
  }

  langSelect(lang) {
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
  }

}
