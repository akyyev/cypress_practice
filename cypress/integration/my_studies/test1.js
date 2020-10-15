/// <reference types="Cypress" />

describe('First test suite', () => {
    
    // navigating, clicking, typing, iterating over elements, Querying by Text Content (contains('text'))
    
    // cypress commands are generally asynchronous, it doesn't guarantee order of execution
    // it queues all commands, if commands are cypress commands then they will be executed in order because they are 
    // wrapped inside logic with then methods
    // promises has 3 states, resolve-rejected-pending
    // to handle promises we use .then(func) method

    it('First test case', () => {
        // navigate to web page
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000)
        cy.get('.product:visible').should("have.length", 4)
        
        
        //parent child chaining
        cy.get('.products').find('.product').should('have.length', 4);
        
        // aliases - it will act like a variable and reduces code repetition 
        cy.get('.products').find('.product').as('veggies')
        cy.get('@veggies').should('have.length', 4)


        // eq method is for selecting the element specified with an argument
        // Give this element 10 seconds to appear
        let vegItems = cy.get('.products .product', {timeout: 10000})
        vegItems.eq(1).contains('ADD TO CART').click()

        // cy.get('.products .product')
        cy.get('@veggies')  // here we are using aliases
            .each(($el, index, $list)=>{
                // To get text just use text() method
                let textVeg = $el.find('h4.product-name').text()
                
                if(textVeg.includes('Cashews')){
                    // alert($el.find('button').text())
                    $el.find('button').trigger('click');
                }

            })

        // lets get text of logo
        const logo = cy.get('.brand')
            .then(($el)=>{
                cy.log($el.text())
            })
            .then(()=>{
                console.log('This is console log inside then block')
            })
        
        // here cypress handles asyncronous execution
        cy.get('.brand').should('have.text', 'GREENKART')


        console.log('This is normal console log')
        cy.log('This is cypress log')

        
        
    });

    it('Second test case', () => {
    });
});