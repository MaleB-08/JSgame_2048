/// <reference types="cypress" />

describe('Testiranje igre', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('Provjeriti rad dugme Reset', () => {
    cy.contains('Reset').click()
    cy.get('#board').contains('2')
  } )  

  })

