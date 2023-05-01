/// <reference types="cypress" />

describe("Verify Drop-down via webdriveruni", () => {
  it("Select Drop-down  values", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#dropdowm-menu-1").select("python").should("have.value", "python");
  });
});
