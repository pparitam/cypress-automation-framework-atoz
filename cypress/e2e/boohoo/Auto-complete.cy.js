///<reference types ="cypress"/>
describe("Interact with elements", () => {
  it("click the product", () => {
    //visit homepage
    cy.viewport("macbook-15");
    cy.visit("https://www.boohoo.com/");
    //Command to stop failing test due to application error
    Cypress.on("uncaught:exception", (err) => {
      return false;
    });
    //accept cookies
    cy.contains("ACCEPT ALL", { timeout: 20000 }).click({ force: true });
    Cypress.on("window:before:load", () => {
      cy.state("jQuery", Cypress.$);
    });
    // Type in header search bar to get autocomplete suggestions and select the first one
    cy.get("#header-search-input")
      .type("plus")
      .wait(500)
      .get("#result-item-1")
      .click();
  });

  it.only("click the product", () => {
    //visit homepage
    cy.viewport("macbook-15");
    cy.visit("https://www.boohoo.com/");
    //Command to stop failing test due to application error
    Cypress.on("uncaught:exception", (err) => {
      return false;
    });
    //accept cookies
    cy.contains("ACCEPT ALL", { timeout: 20000 }).click({ force: true });
    Cypress.on("window:before:load", () => {
      cy.state("jQuery", Cypress.$);
    });
    // Type in header search bar to get autocomplete suggestions and select the "Skinny Jeans"
    cy.get("#header-search-input").type("jea");
    cy.get(".b-suggestions-section").contains("Skinny").click({ force: true });
    cy.url().should("include", "skinny");
    //Increase the size of the tile
    cy.get(".m-triple").click({ force: true });

    //Select a Product
    // cy.get('.b-product_tile-container').each(($el, index, $list)=>{

    // })

    cy.get(".b-product_tile-title")
      .contains("Petite High Rise 5 Pocket Skinny Jeans")
      .click({ force: true });
  });
});
