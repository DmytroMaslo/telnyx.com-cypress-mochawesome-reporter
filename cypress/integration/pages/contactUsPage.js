import Pages from './pages'
const h1 = 'header h1';
const inputName = '#FirstName';
const inputLastName = '#LastName';
const inputEmail = '#Email';
const selectReason_for_Contact = '#Reason_for_Contact__c';
const inputWebsite = '#Website';
const buttonSubmit = 'form button';
const alertMessage = "form [role='alert']";

class contactUs extends Pages{
    
    header(){
        return cy.get(h1)
    }
    alertMessage(){
        return cy.get(alertMessage)
    }
    clickButtonSubmit(){
        cy.get(buttonSubmit).click()
    }
    typeToForm(name,lastname,email,site){
        cy.get(selectReason_for_Contact).select('Support')
        cy.get(inputName).type(name)
        cy.get(inputLastName).type(lastname)
        cy.get(inputEmail).type(email)
        cy.get(inputWebsite).type(site)
    }
}
module.exports = new contactUs()