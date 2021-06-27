describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })


  describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })
  })

  describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        cy.visit('https://example.cypress.io');
        cy.contains('hype');
    });
  });