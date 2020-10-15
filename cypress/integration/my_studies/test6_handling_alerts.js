/// <reference types="Cypress" />

describe('Sixth test suite', () => {
    
    it('visibility', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Cypress auto-accept-confirm all alerts
        // To get alert text we use window events -> window:alert, window:confirm

        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })


    })


})