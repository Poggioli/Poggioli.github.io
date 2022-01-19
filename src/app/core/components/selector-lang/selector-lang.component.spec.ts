import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TranslateModule } from '@ngx-translate/core'
import { AVAILABLE_LANGS, TRANSLATE_KEY_LANGS } from '@translate/languages'
import { LanguagesService } from '@translate/languages.service'
import { SelectorLangComponent } from './selector-lang.component'

describe('SelectorLangComponent', () => {
  let component: SelectorLangComponent
  let fixture: ComponentFixture<SelectorLangComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SelectorLangComponent
      ],
      imports: [
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        MatSelectModule
      ],
      providers: [
        {
          provide: 'LANGS',
          useValue: AVAILABLE_LANGS
        },
        {
          provide: 'TRANSLATE_KEY',
          useValue: TRANSLATE_KEY_LANGS
        }
      ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorLangComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('ENTÃO deve ser construído', () => {
    expect.assertions(1)
    expect(component).toBeTruthy()
  })

  it(`DADO o componente seletor de idioma
      QUANDO ele for renderizado
      ENTÃO o availableLangs deverá ser um array de { translateKey: string, value: string }`, () => {
    expect.assertions(2)
    expect(component.availableLangs[0]).toHaveProperty('translateKey')
    expect(component.availableLangs[0]).toHaveProperty('value')
  })

  it(`DADO o componente seletor de idioma
      QUANDO ele for renderizado
      ENTÃO o valor da língua selecionada deve ser 'pt'`, () => {
    expect.assertions(1)
    expect(component.lang.value).toBe('pt')
  })

  it(`DADO o componente seletor de idioma
      QUANDO alterar o valor do seletor com um valor válido
      ENTÃO deverá chamar o método setLang do LanguagesService`, () => {
    const languagesService: LanguagesService = TestBed.inject(LanguagesService)
    jest.spyOn(languagesService, 'setLang')
    expect.assertions(2)
    component.lang.setValue('en')
    expect(languagesService.setLang).toHaveBeenCalledTimes(1)
    expect(languagesService.setLang).toHaveBeenCalledWith('en')
  })
})
