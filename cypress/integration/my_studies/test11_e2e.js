///<reference types="Cypress" />

describe('End 2 end test suite', () => {
    

    beforeEach(() => {
        cy.log('I run before every test in every spec file!!!!!!')
      })

    it('should behave...', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength','2')

        cy.get('input[name="name"]:nth-child(2)').type('Bob')
        



        cy.get('input[name="email"]').type('bob202@gmail.co')
        cy.get('select').select('Female').should('have.value', 'Female')
        cy.get("input[name='bday']").type('2007-02-28')


        cy.get('#inlineRadio3').should('be.disabled')


        cy.get('input[type="submit"]').click()

        cy.get('.alert:nth-child(1)').then(($el)=>{
            expect($el.text()).to.contain('Form has been submitted successfully')
        })

        cy.get('.alert:nth-child(1)').should('contain.text','Form has been submitted successfully')

        
    });



})