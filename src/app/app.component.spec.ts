import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ]
        }).compileComponents()
    })

    it('should create the app', () => {
        expect.assertions(1)
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app).toBeTruthy()
    })

    it('should have as title \'Poggioli\'', () => {
        expect.assertions(1)
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app.title).toEqual('Poggioli')
    })

    it('should render title', () => {
        expect.assertions(1)
        const fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        const compiled = fixture.nativeElement
        expect(compiled.querySelector('.content span')?.textContent).toContain('Poggioli app is running!')
    })
})
