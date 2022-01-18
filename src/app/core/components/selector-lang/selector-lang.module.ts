import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectorLangComponent } from 'src/app/core/components/selector-lang/selector-lang.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select'
import { TranslateModule } from '@ngx-translate/core'

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
