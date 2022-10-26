/// <reference types="cypress" />
import ContactUsPage from '../integration/pages/contactUsPage'
import MainPage from '../integration/pages/mainPage'
describe('Contact us page test form', () => {
    before(() => {
      ContactUsPage.navigate('/contact-us')
      ContactUsPage.closeModal()
      })
    it('Check empty form', () => {
      ContactUsPage.clickButtonSubmit()
      ContactUsPage.alertMessage().should('be.visible')
    })
    it('Type to the form check result', () => {
      ContactUsPage.typeToForm('name','Lastname','examploe@gmail.com','https://example.com')
    })    
  })
  