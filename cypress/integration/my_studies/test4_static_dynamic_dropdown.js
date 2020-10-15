/// <reference types="Cypress" />

describe('Fourth test suite', () => {
    
    it('dropdowns', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        // dynamic dropdown, we need to iterate for each element
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item>div').each((element)=>{
            if(element.text()==='Indonesia') element.trigger('click')
        })
        
        cy.get('#autocomplete').should('have.value', 'Indonesia')


    });
});