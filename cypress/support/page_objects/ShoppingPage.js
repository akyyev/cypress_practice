class ShoppingPage{

    clickCheckoutButton = () => cy.get('a.nav-link.btn.btn-primary').click()
    clickSecondCheckoutButton = ()=> cy.get('.btn.btn-success').click()

    countryInputBox = () => cy.get('#country')
    selectCountry = (country) => {
        this.countryInputBox().type(country)

        Cypress.config("defaultCommandTimeout", 10000)
        cy.get('.suggestions>ul>li>a').click()
        
    }

    acceptTermsAndConditions = ()=> cy.get('label[for="checkbox2"]').click({force: true})
    clickPurchase = () => cy.get('input[type="submit"]').click()

    getConfirmationMessage = ()=> cy.get('.alert.alert-success.alert-dismissible')


    // Returns async method, so when using you need to resolve the promise
    // Here we have used .then multiple times to queue execution
    // Otherwise sync variables will be executed at the beginning and method will return 0 (total=0 then return total(0))
    calculateAmount = () => {
        var total = 0

        return cy.get('tr>td:nth-child(4) strong').each((price, index, list)=>{
            total += Number(price.text().substring(3))
        })
        .then(()=>{
            cy.log(total)
        })
        .then(()=>{
            return total
        })
    }

    getTotalAmount = ()=> {
        return cy.get('td>h3 strong').then((element)=>{
            return parseInt(element.text().substring(3))
        })
    }
}

export default ShoppingPage