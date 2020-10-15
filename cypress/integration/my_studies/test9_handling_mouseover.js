///<reference types="Cypress" />

describe('8th test quite', () => {
    
    it('tables', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // We can use show method to open the dropdown - Jquery
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()

        cy.url().should('include', 'top')
        cy.title().should('eq', 'Practice Page')

    });

    it('force click', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // clicking on hidden element
        cy.contains('Top').click({force: true})
    })
});