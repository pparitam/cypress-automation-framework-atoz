///<reference types="cypress"/>

describe("Checkboxes and radio button", () => {
  it("Checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#checkboxes")
      .find('[value="option-1"]')
      .check()
      .should("be.checked");
  });

  it.only("Checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#checkboxes")
      .find('[value="option-1"]')
      .as("check")
      .then(($checkbox) => {
        if ($checkbox.attr == "checked") {
          cy.get("@check").check();
          cy.log("Checked");
        } else {
          cy.get("@check").uncheck();
          cy.log("UnChecked");
        }
      });
  });

  it("Check all Checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#checkboxes")
      .find('input[type="checkbox"]')
      .check()
      .should("be.checked");
  });

  it("uncheck all Checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#checkboxes")
      .find('input[type="checkbox"]')
      .uncheck()
      .should("not.be.checked");
  });
});
