import { Component, Inject } from '@angular/core'
import { FormControl } from '@angular/forms'
import { LanguagesService } from '@translate/languages.service'

@Component({
  selector: 'poggi-selector-lang',
  templateUrl: './selector-lang.component.html',
  styleUrls: ['./selector-lang.component.scss']
})
export class SelectorLangComponent {
  private _langFormControl: FormControl = new FormControl('')

  private _translateLangsValues: { translateKey: string, value: string }[] = []

  public get lang(): FormControl {
    return this._langFormControl
  }

  public get availableLangs(): { translateKey: string, value: string }[] {
    return this._translateLangsValues
  }

  constructor(
    @Inject('LANGS') private _availableLangs: string[],
    @Inject('TRANSLATE_KEY') private _translateLangs: any,
    private _languagesService: LanguagesService
  ) {
    this.observeLangValue()
    this.translateStringLang()
    this._langFormControl.setValue(this._languagesService.getLang())
  }

  private translateStringLang(): void {
    this._translateLangsValues = this._availableLangs
      .map((lang: string) => ({ translateKey: `LANGS.AVAILABLES.${this._translateLangs[lang]}`, value: lang }))
  }

  private changeLang(): void {
    this._languagesService.setLang(this._langFormControl.value)
  }

  private observeLangValue(): void {
    this._langFormControl.valueChanges.subscribe(() => { this.changeLang() })
  }
}
