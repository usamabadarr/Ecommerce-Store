import React from 'react';
import Home from '../../client/src/pages/Home';

describe('<Home /> Component Tests', () => {
  beforeEach(() => {
    cy.mount(<Home />);
  });

  it('renders successfully', () => {
    cy.contains('Welcome');
  });

  it('has expected elements', () => {
    cy.get('header').should('exist');
    cy.get('footer').should('exist');
    cy.get('.product-list').should('exist');
  });

  it('displays correct navigation links', () => {
    cy.get('nav a').should('have.length.at.least', 1);
  });

  it('handles click events on buttons', () => {
    cy.get('button').contains('Learn More').click();
    cy.url().should('include', '/about');
  });

  it('matches the snapshot', () => {
    cy.get('body').toMatchSnapshot();
  });
});

