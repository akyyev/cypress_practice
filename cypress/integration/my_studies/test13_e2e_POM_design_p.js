///<reference types="Cypress" />
import HomePage from '../../support/page_objects/HomePage'
import ShoppingPage from '../../support/page_objects/ShoppingPage'
const data = require('../../fixtures/my_example.json')


describe('End 2 end test suite', function() {
    
    const hp = new HomePage()
    const sp = new ShoppingPage()

    beforeEach(function() {
        cy.log('I run before every test in every spec file!!!!!!')
        cy.log(hp.greeting)

        //Make sure you use function(){...} syntax when creating and calling
        // To get data from json file located under fixtures folder
        cy.fixture('my_example').then((data)=>{
            //here we create global variable that can be used in this class with 'this' keyword
            this.data = data
        })
        
      })


    before(function(){
        //Runs once before all tests in the block
        cy.log('Runs once before all tests in the block')
    })

    it('lets fill the form...', function() {
        cy.log(this.data === undefined)
        // Here we are calling environment variable created at cypress.json file
        cy.visit(Cypress.env("angular_practice_url"))

        hp.getNameInput().should('have.attr', 'minlength','2')

        // This data is coming from require statement
        hp.getNameInput().type(data.name)
        


        //This is coming from fixture statement
        hp.getEmailInput().type(this.data.email)
        hp.selectGender(this.data.gender).should('have.value', this.data.gender)
        hp.selectBirthday('2007-02-28')


        cy.get('#inlineRadio3').should('be.disabled')

        hp.getSubmitButton().click()

        cy.get('.alert:nth-child(1)').then(($el)=>{
            expect($el.text()).to.contain('Form has been submitted successfully')
        })

        cy.get('.alert:nth-child(1)').should('contain.text','Form has been submitted successfully')

        
    });

    
    it('Add multiple phones to cart...', function(){
        cy.contains('Shop').click()

        
        addPhoneToCart('Samsung Note 8')

        // Here we've called the customized command from cy
        cy.addPhoneToCart('Blackberry')

        // Helpfull For debugging 
        // cy.pause()

        // Adding phones to our cart from json file object
        this.data.products.forEach(x=>cy.addPhoneToCart(x))
    });


    // instead of keeping commands here we'll put them under support -> commands.js
    function addPhoneToCart(phone){
        cy.get('h4.card-title').each(($el, index, $list)=>{
            cy.log($el.text())
            if($el.text().includes(phone)){
                cy.log('Found matching, index: ', index)
                cy.get('.btn.btn-info').eq(index).click()
            }
        })
    }


    it('Lets complete the purchase', () => {
        
        sp.clickCheckoutButton()


        //lets compare if calculation is right or not
        // summing up with cypress
        sp.calculateAmount().then((total)=>{
            sp.getTotalAmount().then((calcValue)=>{
                expect(calcValue).to.equal(total)
            })
        })


        sp.clickSecondCheckoutButton()

        sp.selectCountry("Indonesia")

        sp.acceptTermsAndConditions()
        sp.clickPurchase()

        sp.getConfirmationMessage().then(text=>{
            expect(text).to.contain('Success!')
        })
    });

})