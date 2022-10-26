const closeButton = "button[aria-label='close and deny']";
module.exports = class Pages{
    navigate(url){
        cy.visit(url)
    }
    closeModal(){
        cy.get(closeButton).click()
    }
}