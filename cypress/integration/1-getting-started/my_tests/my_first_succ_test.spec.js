describe('Check the main page of dou site', () => {
    beforeEach (() => {
      cy.visit('https://dou.ua')

  })
  it('Check the header elements of main page', () => {
      cy.get('li.logo').should('be.visible')
  })

  it('clicks the link "https://dou.ua/lenta/"', () => {
    cy.contains('li >[0]').click()
  })
})