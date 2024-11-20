describe('E-commerce Store End-to-End Tests', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('loads the homepage successfully', () => {
    cy.contains('E-commerce Store'); 
  });

  it('navigates through the Navbar links', () => {
    cy.get('nav a').each((link) => {
      cy.wrap(link).click();
      cy.url().should('include', link.attr('href'));
    });
  });

  it('adds a product to the shopping cart', () => {
    cy.get('.product-card').first().within(() => {
      cy.contains('Add to Cart').click();
    });
    cy.get('.shopping-cart').should('contain', '1 Item');
  });
});
