import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { AVAILABLE_LANGS } from 'src/app/core/translate/languages'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  let translateAddLangSpy: jest.SpyInstance
  let translateSetDefaultSpy: jest.SpyInstance

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [AppComponent]
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
