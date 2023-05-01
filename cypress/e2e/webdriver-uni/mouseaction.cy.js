/// <reference types="cypress" />

describe("Scroll into view and click", () => {
  it("Select specific product via Auto complete Drop-down  values", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it("Select specific product via Auto complete Drop-down  values", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove", { force: true })
      .trigger("mouseup", { force: true });
  });

  it.only("Select specific product via Auto complete Drop-down  values", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#double-click");
    cy.get("#double-click")
      .dblclick()
      .then(($colr) => {
        expect($colr).to.have.css("background-color", "rgb(147, 203, 90)");
      });
  });
});
