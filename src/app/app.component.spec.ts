import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { SelectorLangModule } from '@components/selector-lang/selector-lang.module'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { AVAILABLE_LANGS, TRANSLATE_KEY_LANGS } from '@translate/languages'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  let translateAddLangSpy: jest.SpyInstance
  let translateSetDefaultSpy: jest.SpyInstance

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        SelectorLangModule
      ],
      declarations: [
        AppComponent
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
    }).compileComponents()
  })

  beforeEach(() => {
    const translateService: TranslateService = TestBed.inject(TranslateService)
    translateAddLangSpy = jest.spyOn(translateService, 'addLangs')
    translateSetDefaultSpy = jest.spyOn(translateService, 'setDefaultLang')
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('ENTÃO deve ser construído', () => {
    expect(component).toBeDefined()
  })

  it(`DADO o serviço de tradução
      QUANDO a app for inicializada
      ENTÃO deverá adicionar a lista de línguas disponíveis
      E atribuir a língua default`, () => {
    expect(translateAddLangSpy).toHaveBeenCalledTimes(2)
    expect(translateAddLangSpy).toHaveBeenCalledWith(AVAILABLE_LANGS)

    expect(translateSetDefaultSpy).toHaveBeenCalledTimes(1)
    expect(translateSetDefaultSpy).toHaveBeenCalledWith('pt')
  })
})
