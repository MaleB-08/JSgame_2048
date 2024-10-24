/// <reference types="cypress" />

describe('Testiranje igre', () => {
    beforeEach(() => {
      cy.visit('index.html')
    })

    it('Provjera Prikazivanja Vecih Brojeva', () => {
        cy.contains('Reset').click()
        cy.get('body').type('{downArrow}', {force: true})
        cy.get('body').type('{rightArrow}', {force: true})
        cy.get('body').type('{rightArrow}', {force: true})
        cy.get('body').type('{downArrow}', {force: true})
        cy.get('body').type('{rightArrow}', {force: true})
        cy.get('body').type('{downArrow}', {force: true})
        cy.get('#board').contains('8')
        cy.get('body').type('{downArrow}', {force: true})
        cy.get('body').type('{rightArrow}', {force: true})
        cy.get('body').type('{rightArrow}', {force: true})
        cy.get('body').type('{downArrow}', {force: true})
        cy.get('body').type('{downArrow}', {force: true})
        cy.get('body').type('{rightArrow}', {force: true})
        cy.get('body').type('{rightArrow}', {force: true})
        cy.get('body').type('{downArrow}', {force: true})
        cy.get('#board').contains('16')
    })
})