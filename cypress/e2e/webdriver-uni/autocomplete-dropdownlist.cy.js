/// <reference types="cypress" />

describe("Verify Auto complete Drop-down via webdriveruni", () => {
  it("Select specific product via Auto complete Drop-down  values", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const product = $el.text();
        const productToselect = "Apple";
        if (product == productToselect) {
          //$el.click()
          $el.trigger("click");
          cy.get("#submit-button").click();
          cy.url().should("include", productToselect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const product = $el.text();
          const productToselect = "Grapes";
          if (product == productToselect) {
            //$el.click()
            $el.trigger("click");
            cy.get("#submit-button").click();
            cy.url().should("include", productToselect);
          }
        });
      });
  });
});
