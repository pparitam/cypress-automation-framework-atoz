/// <reference types="cypress" />

describe("Verify radio buttons via webdriveruni", () => {
  it("Check specific radio buttons", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#radio-buttons").find("[type='radio']").first().check();
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
  });

  it("Validate the states of specific radio buttons", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='pumpkin']").should("be.checked");

    cy.get("[value='lettuce']").check();
    cy.get("[value='lettuce']").should("be.checked");
    cy.get("[value='pumpkin']").should("not.be.checked");

    cy.get("[value='cabbage']").should("be.disabled");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(4) > .thumbnail").click();
    cy.get('[value="yellow"]').check();
    cy.get('[value="purple"]').check();
    cy.get("#radio-buttons").click();
    cy.get("#radio-buttons-selected-disabled").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("new_url", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://www.webdriveruniversity.com/");
    /* ==== End Cypress Studio ==== */
  });
});
