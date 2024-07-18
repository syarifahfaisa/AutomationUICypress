class formAssertion{
    
    //header
    assertHeader(){
        cy.get('.text-2xl').should('contain','User Information')
    }

    // Title* and dropdown selection with "Choose your title" text
    assertTitleSection(){
        cy.get('[for="title"]').should('contain','Title*')
        cy.get('#title').should('contain','Choose your title')
    }

    assertTitleList(){
        cy.get('#title').children()
        .first()
        .should('contain', 'Choose your title')
        .next()
        .should('contain', 'Mr.')
        .next()
        .should('contain', 'Mrs.')
        .next()
        .should('contain', 'Ms.')
    }

    // First Name* and input text field
    assertFirstNameSection(){
        cy.get('[for="firstName"]').should('contain','First Name*')
        cy.get('#firstName').should('exist')
    }

    assertFirstNameErrorHidden(){
        cy.get('[id="firstName-error"]').should('not.be.visible')
    }

    assertFirstNameErrorShow(error){
        cy.get('[id="firstName-error"]').should('contain',error)
    }

    // Middle Name* and input text field
    assertMiddleNameSection(){
        cy.get('[for="middleName"]').should('contain','Middle Name*')
        cy.get('#middleName').should('exist')
    }

    assertMiddleNameErrorHidden(){
        cy.get('[id="middleName-error"]').should('not.be.visible')
    }

    assertMiddleNameErrorShow(error){
        cy.get('[id="middleName-error"]').should('contain',error)
    }

    // Last Name* and input text field
    assertLastNameSection(){
        cy.get('[for="lastName"]').should('contain','Last Name*')
        cy.get('#lastName').should('exist')
    }

    assertLastNameErrorHidden(){
        cy.get('[id="lastName-error"]').should('not.be.visible')
    }

    assertLastNameErrorShow(error){
        cy.get('[id="lastName-error"]').should('contain',error)
    }
    
    // Email* and input text field
    assertEmailSection(){
        cy.get('[for="email"]').should('contain','Email*')
        cy.get('#email').should('exist')
    }

    assertEmailErrorHidden(){
        cy.get('[id="email-error"]').should('not.be.visible')
    }

    assertEmailErrorShow(error){
        cy.get('[id="email-error"]').should('contain',error)
    }

    // Phone Number* and input text field
    assertPhoneSection(){
        cy.get('[for="phone"]').should('contain','Phone Number*')
        cy.get('#phone').should('exist')
    }

    assertPhoneErrorHidden(){
        cy.get('[id="phone-error"]').should('not.be.visible')
    }

    assertPhoneErrorShow(error){
        cy.get('[id="phone-error"]').should('contain',error)
    }
    
    // Date of Birth* and date picker
    assertDOBSection(){
        cy.get('[for="dob"]').should('contain','Date of Birth*')
        cy.get('#dob').should('have.attr', 'type', 'date')
    }

    assertDOBErrorHidden(){
        cy.get('[id="dob-error"]').should('not.be.visible')
    }

    assertDOBErrorShow(error){
        cy.get('[id="dob-error"]').should('contain',error)
    }
        
    // Gender* and toggle button with Off state as Male and On state as Female
    assertGenderSection(){
        cy.get('[for="genderToggle"]').first().should('contain', 'Gender*')
        .next()
        .should('contain', 'Male')
        .last()
        .should('contain', 'Female')
    }
    
    // Address* and dropdown selection with "Select a province" text and dropdown with "Select a city" text
    assertAddressSection(){
        cy.get('[for="province"]').should('contain','Address*')
        cy.get('#province').should('contain','Select a province')
        cy.get('#city').should('contain','Select a city')
    }

    assertProvinceList(){
        cy.get('#province').children()
        .first()
        .should('contain', 'Select a province')
        .next()
        .should('contain', 'DKI Jakarta')
        .next()
        .should('contain', 'Jawa Barat')
        .next()
        .should('contain', 'Jawa Tengah')

        // DKI Jakarta
        // Jawa Barat
        // Jawa Tengah
        // Jawa Timur
        // Sumatera Utara
        // Sumatera Barat
        // Kalimantan Timur
        // Kalimantan Selatan
        // Kalimantan Tengah
        // Sulawesi Tenggara
        // Sulawesi Selatan
        // Sulawesi Utara
        // Papua Barat
        // Papua Pegunungan
    }

    assertProvinceErrorHidden(){
        cy.get('[id="province-error"]').should('not.be.visible')
    }

    assertProvinceErrorShow(error){
        cy.get('[id="province-error"]').should('contain',error)
    }

    assertCityList(){
        cy.get('#city').children()
        .first()
        .should('contain', 'Select a city')
        .next()
        .should('contain', 'Jakarta Barat')
        .next()
        .should('contain', 'Jakarta Utara')
        .next()
        .should('contain', 'Jakarta Selatan')

        // List of cities:
        // Jakarta Barat
        // Jakarta Utara
        // Jakarta Selatan
        // Jakarta Timur
        // Jakarta Pusat
        // Kepulauan Seribu
    }

    assertCityErrorHidden(){
        cy.get('[id="city-error"]').should('not.be.visible')
    }

    assertCityErrorShow(error){
        cy.get('[id="city-error"]').should('contain',error)
    }

    assertPopUpShow(){
        cy.get('#userModal', { timeout: 12000 }).should('be.visible')
    }

    assertPopUpHidden(){
        cy.get('#userModal').should('not.be.visible')
    }
}
export default formAssertion