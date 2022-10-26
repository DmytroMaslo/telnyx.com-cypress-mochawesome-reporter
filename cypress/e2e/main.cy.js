/// <reference types="cypress" />
import MainPage from '../integration/pages/mainPage' 

describe('Telnyx main page', () => {
    beforeEach(() => {
      MainPage.navigate('/')
    })
    it('Check list of products', () => {
      MainPage.closeModal()
      MainPage.getProducts()
        .each(($el) => {
          cy.wrap($el).find('h3').should('be.visible')
          cy.wrap($el).find('div+p').should('be.visible')
          cy.wrap($el).find('a').should('have.attr','href')
        })
    })
})
  