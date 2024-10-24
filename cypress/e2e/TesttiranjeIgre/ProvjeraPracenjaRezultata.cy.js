/// <reference types="cypress" />

describe('Testiranje igre', () => {
    beforeEach(() => {
      cy.visit('index.html')
    })

    it('Provjera Pracenja Rezultata', () => {
        cy.contains('Reset').click()
        cy.get('body').type('{downArrow}', {force: true})
        cy.get('body').type('{rightArrow}', {force: true})
        cy.get('body').type('{rightArrow}', {force: true})
        cy.get('body').type('{downArrow}', {force: true})
        cy.get('#scorelabel').contains('12')
    })
})