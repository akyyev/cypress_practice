/// <reference types="Cypress" />

describe('Seventh test suite', () => {
    
    it('visibility', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // We will use jquery removeAttr( ) method to remove target = '_blank' which causes opening in new tab

        // cy.on('uncaught:exception', (err, runnable) => {
        //     // returning false here prevents Cypress from
        //     // failing the test
        //     done()
        //     return false
        //   })

        // Solution 1
        //   cy.get('#opentab').invoke('removeAttr', 'target').click()
       
        // Solution 2
        // cy.get('#opentab').should('have.attr', 'href')
        // .then((href)=>{
        //     cy.visit(href)
        // })


        // Solution 3
        // cy.get('#opentab').invoke('attr', 'href')
        // .then((link)=>{
        //     cy.log(link)
        //     cy.visit(link)
        // })


        // Solution 4, using jQuery method (prop)
        cy.get('#opentab').then((el)=>{
            const url = el.prop('href')
            cy.visit(url)
        })
        
    })

    it('new windows', () => {
        let mainPage = 'https://the-internet.herokuapp.com'
        cy.visit(mainPage+'/windows')

        // cy.contains('Click Here').invoke('removeAttr', 'target').click()

        cy.contains('Click Here').invoke('attr', 'href')
        .then((link)=>{
            cy.log(link)
            cy.visit(mainPage+link)
        })

        cy.url().should('include', mainPage+'/windows/new')
        cy.go('back')

        cy.visit('https://google.com')
    })

})