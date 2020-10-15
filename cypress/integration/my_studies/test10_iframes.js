///<reference types="Cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe'

describe('8th test quite', () => {
    // npm install -D cypress-iframe

    
    it('tables', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.wait(2000)
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find('a[href*="mentorship"]').eq(0).click()

    })

})