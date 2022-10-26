import Pages from './pages'

const products = 'main ul:nth-child(2) li'
class MainPage extends Pages{
    
    getProducts(){
        return cy.get(products)
    }
}
module.exports = new MainPage()