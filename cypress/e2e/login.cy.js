/// <reference types="cypress" />
import LoginPage from '../integration/pages/loginPage'
describe('Telnyx login', () => {
    before(() => {
        LoginPage.navigate('https://portal.telnyx.com/')
    })
    it('Login with invalid data', () => {
      LoginPage.login('dmytromaslo@gmail.com','123456789!Pp!')
      LoginPage.checkError()
    })
    it('Login with valid data', () => {
      LoginPage.login('dmytromaslo@gmail.com','123456789!Pp')
      LoginPage.checkError()
      //cy.url({timeout: 15000}).should('include','portal.telnyx.com/#/app/');
    })
})
  