class formAction{
    openForm(){
        cy.visit('/')
    }

    selectOneTitle(title){
        cy.get('select').first().select(title)
    }

    inputFirstName(name){
        cy.get('[id="firstName"]').type(name)
    }

    inputMiddleName(name){
        cy.get('[id="middleName"]').type(name)
    }

    inputLastName(name){
        cy.get('[id="lastName"]').type(name)
    }

    inputEmail(email){
        cy.get('[id="email"]').type(email)
    }

    inputPhoneNumber(phone){
        cy.get('[id="phone"]').type(phone)
    }

    inputDateOfBirth(dob){
        cy.get('[id="dob"]').click().type(dob)
    }

    clickGenderToggle(){
        cy.get('.slider').click()
    }

    selectOneProvince(province){
        cy.get('[name="province"], [id="province"]').select(province)
    }

    selectOneCity(city){
        cy.get('[name="city"], [id="city"]').select(city)
    }

    clickSubmitButton(){
        cy.get('[type="submit"]').click()
    }

    clickCloseButton(){
        cy.get('.border-t > .px-4').click()
    }
}
export default formAction