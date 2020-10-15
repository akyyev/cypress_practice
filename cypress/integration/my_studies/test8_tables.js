///<reference types="Cypress" />

describe('8th test quite', () => {
    
    it('tables', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Here we are creating alias for column-2 rows
        cy.get('#product tr td:nth-child(2)').as('rows')

        // By using each method we can iterate on each row
        cy.get('@rows').each(($row, index, $list)=>{
            // Here indexing is calculated, to move to next td we can use next method 
            // But it needs cy.get('...') with index 
            // So we used eq
            // Then called next method
            // Then assertion
            if($row.text()==='WebServices / REST API Testing with SoapUI'){
                cy.get('@rows').eq(index).next()
                    .then((el)=>{
                        expect(el.text()).to.equal('35')
                    })
            }
        })
    });
});