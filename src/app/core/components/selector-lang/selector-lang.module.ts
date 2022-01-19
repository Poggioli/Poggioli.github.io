import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select'
import { TranslateModule } from '@ngx-translate/core'
import { SelectorLangComponent } from './selector-lang.component'

@NgModule({
  declarations: [
    SelectorLangComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    SelectorLangComponent
  ]
})
export class SelectorLangModule { }
