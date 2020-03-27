// @ts-nocheck
describe('Sapper template app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the map container', () => {
    cy.get('#map');
  });
  it('renders the map', () => {
    cy.get('#map > .mapboxgl-canvas-container > canvas.mapboxgl-canvas');
  });

});
