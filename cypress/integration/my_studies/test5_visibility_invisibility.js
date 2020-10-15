/// <reference types="Cypress" />

describe('Fifth test suite', () => {
    
    it('visibility', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // at the beginning it's visible
        cy.get('#displayed-text').should('be.visible')
        
        // now we're hiding the text-box, so it should not be visible
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')


        // now show again, so it should be visible
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    });
});