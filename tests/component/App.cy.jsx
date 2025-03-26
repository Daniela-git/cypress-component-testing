import App from '../../src/App';
import { StrictMode } from 'react';

describe('App', () => {
  it('should has count button', () => {
    cy.mount(
      <StrictMode>
        <App />
      </StrictMode>
    );

    cy.get('[data-testid=count-button]').should('have.text', 'count is 0');
  });
});
