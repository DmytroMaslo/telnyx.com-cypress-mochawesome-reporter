class SipTrunksPage{
    navigate(){
        cy.visit('/solutions/customer-engagement-platforms')
    }
    header(){
        return cy.get("header h1")
    }
    list(){
        return cy.get("main li img").parents('li')
    }
    buttonSchedule(){
        return cy.contains('a','Schedule a call')
    }    
    checkList(){
        this.list().each(($el) => {
            cy.wrap($el).find('h3').should('be.visible')
            cy.wrap($el).find('h3+p').should('be.visible')
            cy.wrap($el).find('img').should('have.attr','src')
      })
    }
    clickButtonSchedule(){
        this.buttonSchedule().click({force: true})
    }
}
module.exports = new SipTrunksPage()