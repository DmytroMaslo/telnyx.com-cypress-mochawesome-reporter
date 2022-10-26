/// <reference types="cypress" />
import SolutionCustomerPage from '../integration/pages/solutionCustomerPage'
import ContactUsPage from '../integration/pages/contactUsPage'
describe('Customer Engagement Platforms Page', () => {
    beforeEach(() => {
      SolutionCustomerPage.navigate('/solutions/customer-engagement-platforms')
      //MainPage.closeModal()
      })
    it('Check Header', () => {
      SolutionCustomerPage.header().should('be.visible').should('contain.text','Customer Engagement')
    })
    it('Check list', () => {
      SolutionCustomerPage.checkList()
    })
    it('Joerny to contact form page', () => {
      SolutionCustomerPage.clickButtonSchedule()
      cy.url().should('include','/contact-us')
      SolutionCustomerPage.header().should('be.visible').should('contain.text','Talk to an expert')
    })    
  })
  