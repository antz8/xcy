describe('testing cci', () => {
  it('ping', () => {
    
    cy.request('https://pay.tokopedia.com/ping')
  });
});