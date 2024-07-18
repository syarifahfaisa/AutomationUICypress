import formAction from '../../support/pageAction/formAction'
import formAssertion from '../../support/pageAssertion/formAssertion'

describe('form regress', () => {
  const FormAction = new formAction()
  const FormAssertion = new formAssertion()

  beforeEach(() => {
    FormAction.openForm()
  })

  it('C2419 assert open form success', () => {
    //Page Header
    FormAssertion.assertHeader()

    // Title* and dropdown selection with "Choose your title" text
    FormAssertion.assertTitleSection()

    // First Name* and input text field
    FormAssertion.assertFirstNameSection()

    // Middle Name* and input text field
    FormAssertion.assertMiddleNameSection()

    // Last Name* and input text field
    FormAssertion.assertLastNameSection()

    // Email* and input text field
    FormAssertion.assertEmailSection()

    // Phone Number* and input text field
    FormAssertion.assertPhoneSection()

    // Date of Birth* and date picker
    FormAssertion.assertDOBSection()

    // Gender* and toggle button with Off state as Male and On state as Female
    FormAssertion.assertGenderSection()

    // Address* and dropdown selection with "Select a province" text and dropdown with "Select a city" text
    FormAssertion.assertAddressSection()
  })

  //C2420 Click dropdown -> gabisa di click karena tipenya select, jd masuk ke case C2423

  it('C2423 select Title',()=>{
    FormAssertion.assertTitleList()
    FormAction.selectOneTitle('Mr.')
  })

  //First Name
  it('C2424 enter valid First Name',()=>{
    FormAction.inputFirstName('siapa')
    FormAssertion.assertFirstNameErrorHidden()
  })

  it('C2425 enter invalid First Name',()=>{
    FormAction.inputFirstName('siapa ya{enter}')
    FormAssertion.assertFirstNameErrorShow('First name can only consists of letters')
  })

  it('C2451 enter First Name more than 30 char',()=>{
    FormAction.inputFirstName('siapaaaaaaaaaaaaaaaaaaaaaaaaaaaa{enter}')
    FormAssertion.assertFirstNameErrorShow('First name cannot be more than 30 characters')
  })
  
  it('C2426 empty First Name',()=>{
    FormAction.inputFirstName('{enter}')
    FormAssertion.assertFirstNameErrorShow('First name is required')
  })

  //Middle Name
  it('C2427 enter valid Middle Name',()=>{
    FormAction.inputMiddleName('siapa')
    FormAssertion.assertMiddleNameErrorHidden()
  })

  it('C2428 enter invalid Middle Name',()=>{
    FormAction.inputMiddleName('siapa ya{enter}')
    FormAssertion.assertMiddleNameErrorShow('Middle name can only consists of letters')
  })

  it('C2452 enter Middle Name more than 30 char',()=>{
    FormAction.inputMiddleName('siapaaaaaaaaaaaaaaaaaaaaaaaaaaaa{enter}')
    FormAssertion.assertMiddleNameErrorShow('Middle name cannot be more than 30 characters')
  })
  
  it('C2429 empty Middle Name',()=>{
    FormAction.inputMiddleName('{enter}')
    FormAssertion.assertMiddleNameErrorShow('Middle name is required')
  })

  //Last Name
  it('C2430 enter valid Last Name',()=>{
    FormAction.inputLastName('siapa')
    FormAssertion.assertLastNameErrorHidden()
  })

  it('C2431 enter invalid Last Name',()=>{
    FormAction.inputLastName('siapa ya{enter}')
    FormAssertion.assertLastNameErrorShow('Last name can only consists of letters')
  })

  it('C2453 enter Last Name more than 30 char',()=>{
    FormAction.inputLastName('siapaaaaaaaaaaaaaaaaaaaaaaaaaaaa{enter}')
    FormAssertion.assertLastNameErrorShow('Last name cannot be more than 30 characters')
  })
  
  it('C2432 empty Last Name',()=>{
    FormAction.inputLastName('{enter}')
    FormAssertion.assertLastNameErrorShow('Last name is required')
  })

  //Email
  it('C2433 enter valid Email',()=>{
    FormAction.inputEmail('siapaya@gmail.com{enter}')
    FormAssertion.assertEmailErrorHidden()
  })

  it('C2434 enter invalid Email',()=>{
    FormAction.inputEmail('siapaya@@gmail.com{enter}')
    FormAssertion.assertEmailErrorShow('Invalid email format')
  })
  
  it('C2435 empty Email',()=>{
    FormAction.inputEmail('{enter}')
    FormAssertion.assertEmailErrorShow('Email is required')
  })

  //Phone Number
  it('C2436 enter valid Phone Number',()=>{
    FormAction.inputPhoneNumber('01234567890{enter}')
    FormAssertion.assertPhoneErrorHidden()
  })

  it('C2437 enter invalid Phone Number',()=>{
    //less than 10
    FormAction.inputPhoneNumber('123456789{enter}')
    FormAssertion.assertPhoneErrorShow('Phone number must be 10-12 digits')
    //more than 12
    cy.get('[id="phone"]').clear()
    FormAction.inputPhoneNumber('0123456789000{enter}')
    FormAssertion.assertPhoneErrorShow('Phone number must be 10-12 digits')
  })
  
  it('C2438 empty Phone Number',()=>{
    FormAction.inputPhoneNumber('{enter}')
    FormAssertion.assertPhoneErrorShow('Phone number is required')
  })

  //Date of Birth
  it('C2439 enter date of birth',()=>{
    FormAction.inputDateOfBirth('2000-01-01')
    FormAction.clickSubmitButton()
    FormAssertion.assertDOBErrorHidden()
  })

  //C2440 Click calender widget(?) -> gabisa di click karena gaada selectornya, nyatu sama input text tanggal(?), jd inputnya di ketik aja

  it('C2441 empty Date of Birth',()=>{
    FormAction.clickSubmitButton()
    FormAssertion.assertDOBErrorShow('Date of birth is required')
  })

  //Gender 
  it('C2442 click Gender Toggle',()=>{
    FormAction.clickGenderToggle()
  })

  //Address
  //C2443 Click dropdown -> gabisa di click karena tipenya select, jd masuk ke case C2444

  it('C2444 select Province',()=>{
    FormAssertion.assertProvinceList()
    FormAction.selectOneProvince('DKI Jakarta')
    FormAction.clickSubmitButton()
    FormAssertion.assertProvinceErrorHidden()
  })

  it('C2445 empty Province',()=>{
    FormAction.clickSubmitButton()
    FormAssertion.assertProvinceErrorShow('Province is required')
  })

  //C2446 Click dropdown -> gabisa di click karena tipenya select, jd masuk ke case C2447

  it('C2447 select City',()=>{
    FormAction.selectOneProvince('DKI Jakarta')
    cy.get('#city > option:nth-child(1)').wait(20)
    FormAssertion.assertCityList()
    FormAction.selectOneCity('Jakarta Selatan')
    FormAction.clickSubmitButton()
    FormAssertion.assertCityErrorHidden()
  })

  it('C2448 empty City',()=>{
    FormAction.clickSubmitButton()
    FormAssertion.assertCityErrorShow('City is required')
  })

  //Submit Valid
  it('C2449 enter all Valid Data',()=>{
    //input valid data
    FormAction.selectOneTitle('Mrs.')
    FormAction.inputFirstName('siapa')
    FormAction.inputMiddleName('ya')
    FormAction.inputLastName('namanya')
    FormAction.inputEmail('siapaya@gmail.com')
    FormAction.inputPhoneNumber('01234567890')
    FormAction.inputDateOfBirth('2000-01-01')
    FormAction.clickGenderToggle()
    FormAction.selectOneProvince('DKI Jakarta')
    cy.get('#city > option:nth-child(1)').wait(20)
    FormAction.selectOneCity('Jakarta Selatan')
    //click submit
    FormAction.clickSubmitButton()
    //assert pop up
    FormAssertion.assertPopUpShow()
  })

  //Submit Invalid
  it('C2454 enter inValid Data',()=>{
    //input invalid data
    FormAction.selectOneTitle('Mrs.')
    FormAction.inputFirstName('siapa')
    FormAction.inputMiddleName('ya')
    FormAction.inputLastName('namanya')
    FormAction.inputEmail('siapaya@@gmail.com')
    FormAction.inputPhoneNumber('123456789')
    FormAction.selectOneProvince('DKI Jakarta')
    cy.get('#city > option:nth-child(1)').wait(20)
    FormAction.selectOneCity('Jakarta Selatan')
    //click submit
    FormAction.clickSubmitButton()
    //assert no pop up
    FormAssertion.assertPopUpHidden()
  })

  //click close button
  it('C2449 enter all Valid Data',()=>{
    //input valid data
    FormAction.selectOneTitle('Mrs.')
    FormAction.inputFirstName('siapa')
    FormAction.inputMiddleName('ya')
    FormAction.inputLastName('namanya')
    FormAction.inputEmail('siapaya@gmail.com')
    FormAction.inputPhoneNumber('01234567890')
    FormAction.inputDateOfBirth('2000-01-01')
    FormAction.clickGenderToggle()
    FormAction.selectOneProvince('DKI Jakarta')
    cy.get('#city > option:nth-child(1)').wait(20)
    FormAction.selectOneCity('Jakarta Selatan')
    //click submit
    FormAction.clickSubmitButton()
    //assert pop up
    FormAssertion.assertPopUpShow()
    FormAction.clickCloseButton()
    FormAssertion.assertPopUpHidden()
  })
})