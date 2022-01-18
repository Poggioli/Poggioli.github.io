import { Component, Inject, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'poggi-selector-lang',
  templateUrl: './selector-lang.component.html',
  styleUrls: ['./selector-lang.component.scss']
})
export class SelectorLangComponent implements OnInit {
  private _langFormControl: FormControl = new FormControl('')

  private _translateLangsValues: { translateKey: string, value: string }[] = []

  public get lang(): FormControl {
    return this._langFormControl
  }

  public get availableLangs(): { translateKey: string, value: string }[] {
    return this._translateLangsValues
  }

  constructor(
    @Inject('AVAILABLE_LANGS') private _availableLangs: string[],
    @Inject('TRANSLATE_LANGS') private _translateLangs: any,
    private _translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.observeLangValue()
    this.translateStringLang()
  }

  private translateStringLang(): void {
    this._translateLangsValues = this._availableLangs
      .map((lang: string) => ({ translateKey: `LANGS.AVAILABLES.${this._translateLangs[lang]}`, value: lang }))
  }

  private changeLang(): void {
    const changeToLang: string = this._langFormControl.value
    if (this._availableLangs.some((lang: string) => lang === changeToLang)) {
      this._translateService.setDefaultLang(changeToLang)
    }
  }

  private observeLangValue(): void {
    this._langFormControl.valueChanges.subscribe(() => { this.changeLang() })
  }
}
