///<reference types="Cypress" />
const data = require('../../fixtures/my_example.json')
describe('End 2 end test suite', function() {
    

    beforeEach(function() {
        cy.log('I run before every test in every spec file!!!!!!')
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.fixture('my_example').then((data)=>{
            //here we create global variable that can be used in this class with 'this' keyword
            this.data = data;
        }).then(() => {
            //console.log(this.data); // sync operation gets executed in the beginning, that's why we put it in then block
        })
      })


    before(function(){
        //Runs once before all tests in the block
        //Make sure you use function(){...} syntax when creating and calling
        cy.log('Runs once before all tests in the block')
        // To get data from json file located under fixtures folder
        
    })

    it('should behave...', function() {
        cy.log(this.data === undefined)
       

        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength','2')

        // This data is coming from require statement
        cy.get('input[name="name"]:nth-child(2)').type(data.name)
        

        //This is coming from fixture statement
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('select').select(this.data.gender).should('have.value', this.data.gender)
        cy.get("input[name='bday']").type('2007-02-28')


        cy.get('#inlineRadio3').should('be.disabled')

        cy.get('input[type="submit"]').click()

        cy.get('.alert:nth-child(1)').then(($el)=>{
            expect($el.text()).to.contain('Form has been submitted successfully')
        })

        cy.get('.alert:nth-child(1)').should('contain.text','Form has been submitted successfully')

        
    });

    
    it('Add multiple phones to cart', function(){
        cy.contains('Shop').click()

        addPhoneToCart('Samsung Note 8')

        // Here we've called the customized command from cy
        cy.addPhoneToCart('Blackberry')

        // Helpfull For debugging 
        cy.pause()

        // Adding phones to our cart from json file object
        cy.then(function() {
            console.log(this.data)
            this.data.products.forEach(x=>cy.addPhoneToCart(x))
        })
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

})