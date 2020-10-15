/// <reference types="Cypress" />

describe('Third test suite', () => {
    
    it('checkboxes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        

        // check method is for checkbox validation
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption2').check().uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['option1', 'option2'])

    });
});