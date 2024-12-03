describe('Factors', () => {
  afterEach(() => {
    cy.mocksRestoreRouteVariants()
  })

  //TODO: Fix Tests
  it('should add new factors', () => {
    cy.mocksUseRouteVariant('get-tool-calls:addFactors')
    cy.visit('http://localhost:3000/')
    cy.get('textarea').type('Ich verdiene 2000 Euro monatlich')
    cy.contains('Vorstellung hinzufügen').click()
    cy.contains('mein mock einkommen')
    cy.contains('mein mock auskommen')
    cy.contains('mein mock jahresverbrauch')
    cy.contains('mein mock jahreseinkommen')
    cy.get('[data-chart-result="428498"]')
  })
})
