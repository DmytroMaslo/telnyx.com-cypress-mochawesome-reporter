/// <reference types="cypress" />
import SipTrunksPage from '../integration/pages/sipTrunksPage'
import MainPage from '../integration/pages/mainPage'
describe('Telnyx page sip trunks', () => {
    beforeEach(() => {
      SipTrunksPage.navigate('/products/sip-trunks')
      //SipTrunksPage.closeModal()
      })
    it('Check Header', () => {
      SipTrunksPage.header().should('be.visible').should('contain.text','SIP Trunking for instant')
    })
    it('Check tabs', () => {
      SipTrunksPage.clickToSecondTab()
      SipTrunksPage.textAfterTabs().should('contain.text','Other CPaaS providers',{timeout: 8000})
    })
  })
  