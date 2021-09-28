/// <reference types="cypress" />
import MainPage from '../pages/main.page'
import douSiteData from '../data/data_for_tests'
const mainpage= new MainPage()

describe('Check the main page of dou site', () => {
    before(() => {
        cy.fixture('test_data.json').as('Testdata')
    })
    beforeEach (() => {
        cy.visit('https://dou.ua')

    })
    it('Check the header elements of main page', () => {
        cy.get('li.logo').should('be.visible')
    })

    it('check the search input', () => {
        mainpage.linkToSalaryPage().should('be.visible')
        mainpage.searchInputFiledInHeader().should('be.visible').type(douSiteData.javascript_text),
        cy.wait(3000)
        mainpage.linkInHeader().should('have.length',9)
    })
})

