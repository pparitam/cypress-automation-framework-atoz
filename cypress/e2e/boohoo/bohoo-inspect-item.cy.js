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
    //click on Spring Savings Up to 70% Off! image
    cy.get('[alt="Spring Savings Up to 70% Off!"]').click();

    // select size,color, style, price
    //select Size Tab
    cy.get("#searchRefineBarAccordionItemBtn-size").click();
    //select one size
    cy.get("#refinementAttributesListItem-size-22").click({ force: true });

    //select color tab
    cy.get("#searchRefineBarAccordionItemBtn-colour").click();
    //select colors
    cy.get("#refinementAttributesListItem-colour-red").click();
    cy.contains("Red").click({ force: true });
    ///select occassion tab
    cy.get("#searchRefineBarAccordionItemBtn-occasion").click({ force: true });
    cy.get("#refinementAttributesListItem-occasion-going_out").click({
      force: true,
    });

    //select price tab
    cy.get("#searchRefineBarAccordionItemBtn-price").click();
    cy.get('[aria-label="£10 - £20"]').click({ force: true });
    // cy.scrollTo('top')
    cy.get("#plp-sort-desktop").select("newest-in");

    cy.get("h3.b-product_tile-title").each(($el, index, $list) => {
      if ($el.text().includes("Basic Strappy Cami Bodycon Dress")) {
        cy.wrap($el).click();
      }
    });
  });
});
