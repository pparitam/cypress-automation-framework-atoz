describe('Interacting with Virtual Assistant', () => {

  beforeEach(() => {
    setcookies
  });
  it('Clicks on Virtual Assistant button and interacts with Chatbot', () => {
    cy.visit('https://www.boohoo.com/page/faq.html#faq');

    // Find and click the Virtual Assistant button
    cy.get('button.l-customer_service-button.egain-btn').click();

    // Wait for the iframe to load
    cy.get('iframe#egain-chat-iframe').should('be.visible').then(($iframe) => {
      // Switch to the iframe context
      const iframe = $iframe.contents();
      cy.wrap(iframe).as('chatIframe');

      // Interact with elements inside the iframe
      cy.get('@chatIframe').find('input#chat_input').type('Hello, Chatbot!{enter}');
      cy.get('@chatIframe').find('div#chat_display').should('contain', 'Hello there, how can I assist you today?');
    });
  });
});

