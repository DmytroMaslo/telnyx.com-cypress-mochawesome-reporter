import Pages from './pages'
const inputEmail = "form[aria-label='loginForm']  input[name='email']"
const inputPassword = "form[aria-label='loginForm']  input[name='password']"
const buttonLogin = "form[aria-label='loginForm']  button"
const errorMessage = "div[type='error'] div[type='error']"
class LoginPage extends Pages{
    login(email,password){
        cy.get(inputEmail).clear().type(email,{ force: true})
        cy.get(inputPassword).clear().type(password,{ force: true})
        cy.get(buttonLogin).click({ force: true})
    }
    checkError(){
        cy.get(errorMessage).should('be.visible')
    }
}
module.exports = new LoginPage()