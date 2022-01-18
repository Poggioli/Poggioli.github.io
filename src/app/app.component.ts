import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { AVAILABLE_LANGS } from 'src/app/core/translate/languages'

@Component({
  selector: 'poggi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _translateService: TranslateService) {
    this._translateService.addLangs(AVAILABLE_LANGS)
    this._translateService.setDefaultLang('pt')
  }
}
