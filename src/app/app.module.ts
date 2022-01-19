import { HttpClient, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { AVAILABLE_LANGS, TRANSLATE_KEY_LANGS } from 'src/app/core/translate/languages'
import { SelectorLangModule } from '@components/selector-lang/selector-lang.module'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    SelectorLangModule
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
