describe('E-commerce Filters', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.fixture('keys.json').as('keys');
    });
  
    it('Displays category filters', function () {
      this.keys.forEach((key) => {
        if (key.key.includes('_')) return;
        cy.contains(key.description).should('exist');
      });
    });
  
    it('Filters products by "Electronics" category', function () {
      cy.contains('Electronics').click();
      cy.get('.product-card').each(($el) => {
        cy.wrap($el).should('contain', 'Electronics');
      });
    });
  });
  