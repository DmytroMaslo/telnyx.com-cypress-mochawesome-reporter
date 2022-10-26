# cypress-telnyx.com
Several automatic tests on Cypress(JavaScript) for the site: [telnyx.com](https://telnyx.com/). It check ability to log in, and few another pages.
### Contents
- [Technology](#Technology)
- [Usage](#Usage)
- [Requirements](#Requirements)
- [File structure](#file-structure)
- [Test structure](#test-structure)
- [POM file structure](#pom-file-structure)
- [Testing](#Testing)
- [Result](#Result)
- [To do](#to-do)

### Technology
- [Cypress](https://docs.cypress.io/)

### Usage
- Download project
- Go to root folder
- Install the npm package with the command:

```
$ npm install
```

### Requirements
 :exclamation: To install and run the project, you need [NodeJS](https://nodejs.org/) v14+.

### File structure
- cypress   
    - downloads   
    - e2e 
        - contact-us.cy.js 
        - login.cy.js
        - main.cy.js
        - sip-trunks.cy.js
        - solution-customer.cy.js
    - fixtures  
    - integration  
        - pages
            - contactUsPage.js
            - loginPage.js
            - mainPage.js
            - pages.js
            - sipTrunksPage.js
            - solutionCustomerPage.js
    - screenshots  
    - support  
    - videos

`e2e` folder contains spec files
`pages` folder contains Page Object Model files
 ### Test structure
Cypress has adopted Mocha's bdd syntax. Example below, for details use the [official documentation](https://docs.cypress.io/guides/references/bundled-libraries#Mocha)
```js
describe('Telnyx login', () => {//Title block of tests
    it('Login with invalid data', () => {//Individual test title 
      LoginPage.login('example@gmail.com','password')//directly test
      LoginPage.checkError()
    })
})
```
### POM file structure
Page Object Model (POM) is a design pattern, popularly used in test automation that creates Object Repository for web UI elements. The advantage of the model is that it reduces code duplication and improves test maintenance. Example below, for details use the [official documentation](https://docs.cypress.io/guides/end-to-end-testing/protractor-to-cypress#Cypress-with-Page-Objects)
```js
const inputPassword = "form[aria-label='loginForm']  input[name='password']"//CSS locators
const buttonLogin = "form[aria-label='loginForm']  button"
const errorMessage = "div[type='error'] div[type='error']"
class LoginPage extends Pages{//Сlass title is the same as the page 
    login(email,password){//Method Title, some parameters 
        cy.get(inputEmail).clear().type(email,{ force: true})//directly logic of test
        cy.get(inputPassword).clear().type(password,{ force: true})
        cy.get(buttonLogin).click({ force: true})
    }
    checkError(){
        cy.get(errorMessage).should('be.visible')
    }
}
```
### Testing
To run tests in the headless mod in the root directory,with creating HTML reports execute
```
npm run test:report
```
To open the cypress graphic interface
```
npm run cypress
```
To remove old reports
```
npm run report:clear
```

### Result
After completion of work you should see something like this
![cypress result](https://github.com/Cryzalis/cypress-telnyx.com/blob/dev/cypress-result.png)
### To Do
:heavy_check_mark: write a normal readme

:white_large_square: rewrite everything
