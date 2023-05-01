/// <reference types="cypress" />

describe("Verify Drop-down via webdriveruni", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });

    cy.fixture("example").as("data2");
  });

  it("Select Drop-down  values", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myFile").selectFile("cypress/fixtures/upload-file.png");
    cy.get("#submit-button").click();
  });

  it("Select Drop-down  values", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myFile").selectFile("cypress/fixtures/upload-file.png");
    cy.get("#submit-button").click();
  });
});
