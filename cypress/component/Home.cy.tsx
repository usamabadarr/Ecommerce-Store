import React from 'react';
import Home from '../../client/src/pages/Home';

describe('<Home /> Component Tests', () => {
  it('renders successfully', () => {
    cy.mount(<Home />);
    cy.contains('Welcome');
  });

  it('has expected elements', () => {
    cy.mount(<Home />);
    cy.get('header').should('exist');
    cy.get('footer').should('exist');
  });
});
