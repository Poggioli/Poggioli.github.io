import { TestBed } from '@angular/core/testing'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { AVAILABLE_LANGS } from '@translate/languages'
import { CookieService } from 'ngx-cookie-service'

import { LanguagesService } from './languages.service'

describe('LanguagesService', () => {
  let service: LanguagesService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: 'LANGS',
          useValue: AVAILABLE_LANGS
        }
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
  })

  it(`DADO o serviço de Language
      QUANDO não tiver nenhum idioma previamente escolhido
      ENTÃO o set do CookieService deverá ser chamado 1 vez com o valor 'pt'
      E o get do CookieService deverá ser chamado 1 vez
      E o getLang deverá retornar 'pt'`, () => {
    expect.assertions(4)
    const cookieService: CookieService = TestBed.inject(CookieService)
    jest.spyOn(cookieService, 'get').mockReturnValue('')
    jest.spyOn(cookieService, 'set')
    service = TestBed.inject(LanguagesService)
    expect(cookieService.set).toHaveBeenCalledTimes(1)
    expect(cookieService.set).toHaveBeenCalledWith('lang', 'pt')
    expect(cookieService.get).toHaveBeenCalledTimes(1)
    expect(service.getLang()).toBe('pt')
  })

  it(`DADO o serviço de Language
      QUANDO tiver um idioma previamente escolhido
      ENTÃO o set do CookieService deverá ser chamado 1 vez com o valor previamente escolhido
      E o get do CookieService deverá ser chamado 1 vez
      E o setDefaultLang do TranslateService deverá ser chamado 1 vez com o valor previamente escolhido
      E o getLang deverá retornar o valor previamente escolhido`, () => {
    expect.assertions(6)
    const cookieService: CookieService = TestBed.inject(CookieService)
    const translateService: TranslateService = TestBed.inject(TranslateService)
    jest.spyOn(cookieService, 'get').mockReturnValue('en')
    jest.spyOn(cookieService, 'set')
    jest.spyOn(translateService, 'setDefaultLang')
    service = TestBed.inject(LanguagesService)
    expect(cookieService.set).toHaveBeenCalledTimes(1)
    expect(cookieService.set).toHaveBeenCalledWith('lang', 'en')
    expect(cookieService.get).toHaveBeenCalledTimes(1)
    expect(translateService.setDefaultLang).toHaveBeenCalledTimes(1)
    expect(translateService.setDefaultLang).toHaveBeenCalledWith('en')
    expect(service.getLang()).toBe('en')
  })

  it(`DADO o serviço de Language
      QUANDO chamar o método setLang com um valor válido
      ENTÃO o set do CookieService deverá ser chamado 1 vez com o valor passado
      E o setDefaultLang do TranslateService deverá ser chamado 1 vez com o valor passado`, () => {
    expect.assertions(4)
    const cookieService: CookieService = TestBed.inject(CookieService)
    const translateService: TranslateService = TestBed.inject(TranslateService)
    jest.spyOn(cookieService, 'set')
    jest.spyOn(translateService, 'setDefaultLang')
    service = TestBed.inject(LanguagesService)
    service.setLang('en')
    expect(cookieService.set).toHaveBeenCalledTimes(1)
    expect(cookieService.set).toHaveBeenCalledWith('lang', 'en')
    expect(translateService.setDefaultLang).toHaveBeenCalledTimes(1)
    expect(translateService.setDefaultLang).toHaveBeenCalledWith('en')
  })

  it(`DADO o serviço de Language
      QUANDO chamar o método setLang com um valor inválido
      ENTÃO o set do CookieService deverá ser chamado 1 vez com o valor 'pt'
      E o setDefaultLang do TranslateService deverá ser chamado 1 vez com o valor 'pt'`, () => {
    expect.assertions(4)
    service = TestBed.inject(LanguagesService)
    service.setLang('en')
    const cookieService: CookieService = TestBed.inject(CookieService)
    const translateService: TranslateService = TestBed.inject(TranslateService)
    jest.spyOn(cookieService, 'set')
    jest.spyOn(translateService, 'setDefaultLang')
    service.setLang('ka')
    expect(cookieService.set).toHaveBeenCalledTimes(1)
    expect(cookieService.set).toHaveBeenCalledWith('lang', 'pt')
    expect(translateService.setDefaultLang).toHaveBeenCalledTimes(1)
    expect(translateService.setDefaultLang).toHaveBeenCalledWith('pt')
  })

  it(`DADO o serviço de Language
      QUANDO chamar o método setLang com um valor que já esta no cookie
      ENTÃO o set do CookieService NÃO deverá ser chamado
      E o setDefaultLang do TranslateService NÃO deverá ser chamado`, () => {
    expect.assertions(2)
    service = TestBed.inject(LanguagesService)
    const cookieService: CookieService = TestBed.inject(CookieService)
    const translateService: TranslateService = TestBed.inject(TranslateService)
    jest.spyOn(cookieService, 'set')
    jest.spyOn(translateService, 'setDefaultLang')
    service.setLang('pt')
    expect(cookieService.set).toHaveBeenCalledTimes(0)
    expect(translateService.setDefaultLang).toHaveBeenCalledTimes(0)
  })
})
