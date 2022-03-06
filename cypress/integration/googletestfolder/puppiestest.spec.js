/// <reference types="cypress" />

describe('Google search engine testing', () => {
  beforeEach(
    () => 
  {
    cy.visit('https://www.google.com/')
  })

  it('goodhousekeeping.com is in the google image results for puppies', () => {
    //type puppies into search bar and hit enter
    cy.get('.gLFyf').type('puppies{enter}')

    //click google images
    cy.get('.MUFPAc > :nth-child(2) > a').click()

    // verify good house keeping appears on search results
    cy.contains('goodhousekeeping.com')

  })


})
 



