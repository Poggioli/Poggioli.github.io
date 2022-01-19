import { Inject, Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { CookieService } from 'ngx-cookie-service'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private _lang: BehaviorSubject<string> = new BehaviorSubject<string>('pt')

  constructor(
    @Inject('LANGS') private _availableLangs: string[],
    private _cookieService: CookieService,
    private _translateService: TranslateService
  ) {
    this.verifyLang()
  }

  private getCookie(): string {
    return this._cookieService.get('lang')
  }

  private verifyLang(): void {
    const cookie: string = this.getCookie()
    if (!cookie) {
      this._cookieService.set('lang', this._lang.value)
    } else {
      this.setLang(cookie)
    }
  }

  public getLang(): string {
    return this._lang.value
  }

  public setLang(value: string): void {
    let lang: string = 'pt'
    if (this._availableLangs.some((v: string) => v === value)) {
      lang = value
    }

    if (lang !== this._lang.value) {
      this._translateService.setDefaultLang(lang)
      this._cookieService.set('lang', lang)
      this._lang.next(lang)
    }
  }
}
