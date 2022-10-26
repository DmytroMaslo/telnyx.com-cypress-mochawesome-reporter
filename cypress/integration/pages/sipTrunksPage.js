import Pages from './pages'
const header = "main span strong";
const tabs = "[role='tab']";
const tabPanelText = "[role='tabpanel']:nth-child(3) p";
class SipTrunksPage extends Pages{
    header(){
        return cy.get(header)
    }
    textAfterTabs(){
        return cy.get(tabPanelText);
    }
    blockNetwork(){
        return cy.get("main ul li img").parents('li')
    }
    clickToSecondTab(){
        cy.scrollTo(0, 1800)
        cy.get(tabs).eq(1).click({force: true})
    }
}
module.exports = new SipTrunksPage()