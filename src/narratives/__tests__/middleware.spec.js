// @flow
const { fetchNarrativesWithData } = require('../middleware')
const { NarrativeStore } = require('../../narratives/store')

describe('#fetchNarrativesWithData', () => {
  test('data result added to route context in store', async done => {
    const expected = [{ id: 234, text: 'some narrative' }]
    const dataStub = {
      fetchAll: async _ => ({ ok: true, value: expected })
    }
    const context = { params: {}, store: new NarrativeStore() }
    const routerStub = { redirect: _ => {} }
    const nextSpy = _ => {
      expect(context.store.data).toEqual(expected)
      done()
    }
    await fetchNarrativesWithData(dataStub, routerStub, context, nextSpy)
  })

  test('error result redirects to error page', async done => {
    const dataStub = {
      fetchAll: async _ => ({ ok: false, error: new Error('some error') })
    }
    const context = { params: {}, store: new NarrativeStore() }
    const routerSpy = {
      redirect: url => {
        expect(url).toEqual('/error/500')
        done()
      }
    }
    const nextStub = _ => {}
    await fetchNarrativesWithData(dataStub, routerSpy, context, nextStub)
  })
})
