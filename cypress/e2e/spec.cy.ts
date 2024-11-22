describe('E-commerce Store End-to-End Tests', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('loads the homepage successfully', () => {
    cy.contains('E-commerce Store');
    cy.get('.navbar').should('be.visible');
    cy.get('.product-card').should('exist');
  });

  it('navigates through the Navbar links', () => {
    cy.get('nav a').each((link) => {
      cy.wrap(link)
        .should('have.attr', 'href')
        .then((href) => {
      cy.wrap(link).click();
      cy.url().should('include', link.attr('href'));
    });
  });
  });

  it('adds a product to the shopping cart', () => {
    cy.get('.product-card').first().within(() => {
      cy.contains('Add to Cart').click();
    });
    cy.get('.shopping-cart').should('contain', '1 Item');
    cy.get('.shopping-cart').within(() => {
      cy.contains('Product Name');
  });
});

it('handles empty shopping cart scenario', () => {
  cy.get('.shopping-cart').should('contain', '0 Items');
});

it('displays product details when a product is clicked', () => {
  cy.get('.product-card').first().click();
  cy.url().should('include', '/product');
  cy.get('.product-details').should('be.visible');
});
});