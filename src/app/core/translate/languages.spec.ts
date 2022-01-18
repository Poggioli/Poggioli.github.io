import { AVAILABLE_LANGS, TRANSLATE_KEY_LANGS } from './languages'

describe('Languages', () => {

    describe('AVAILABLE_LANGS', () => {
        it(`DADO o array de línguas disponíveis
            ENTÃO deverá ter o tamanho 1`, () => {
            expect(AVAILABLE_LANGS.length).toBe(2)
        })

        it(`DADO o array de línguas disponíveis
            ENTÃO deverá conter a língua 'pt'`, () => {
            expect(AVAILABLE_LANGS).toContain('pt')
        })

        it(`DADO o array de línguas disponíveis
            ENTÃO deverá conter a língua 'en'`, () => {
            expect(AVAILABLE_LANGS).toContain('en')
        })
    })

    describe('TRANSLATE_KEY_LANGS', () => {
        it(`DADO o array de chaves de línguas disponíveis
            ENTÃO deverá conter a língua 'pt'`, () => {
            expect(TRANSLATE_KEY_LANGS['pt']).toContain('PT_BR')
        })

        it(`DADO o array de chaves de línguas disponíveis
            ENTÃO deverá conter a língua 'en'`, () => {
            expect(TRANSLATE_KEY_LANGS['en']).toContain('EN')
        })
    })
})
