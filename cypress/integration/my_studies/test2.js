/// <reference types="Cypress" />

describe('Second test suite', () => {

    it('First test case', () => {
        // navigate to web page
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(1000)
        cy.get('.products', {timeout: 3000}).find('.product').as('veggies')
        cy.get('@veggies').should('have.length', 4)

        cy.get('@veggies')  
            .each(($el, index, $list)=>{
                let textVeg = $el.find('h4.product-name').text()

                if(textVeg.includes('Cashews') || textVeg.includes('Cauliflower')){
                    $el.find('button').trigger('click');
                }

            })
    
        cy.get('.cart-icon > img').click()
        // cy.contains('PROCEED TO CHECKOUT').click() // or
        cy.get('.cart-preview .action-block>button').click()
        cy.contains('Place Order').click()
        

    });

});