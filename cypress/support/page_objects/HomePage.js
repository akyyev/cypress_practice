
class HomePage{

    greeting = 'Hello';

    getSubmitButton(){
        return cy.get('input[type="submit"]')
    }

    getNameInput = () => cy.get('input[name="name"]:nth-child(2)')
    getEmailInput = () => cy.get('input[name="email"]')

    selectGender = (gender) => cy.get('select').select(gender)
    selectBirthday = (day) => cy.get("input[name='bday']").type(day)
}


export default HomePage