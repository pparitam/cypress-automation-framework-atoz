///<reference types="cypress"/>
describe("Test contact form via webdriverUni", () => {
  it.skip("should be able to submit successful submission via contact us form ", () => {
    //cypress code
    cy.visit("http://www.webdriveruniversity.com/");
    cy.visit("https://automationteststore.com/");
  });
  it("should be able to submit successful submission via contact us form ", () => {
    //cypress code
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target");
  });

  it("should be able to submit successful submission via contact us form ", () => {
    //cypress code
    cy.origin("webdriveruniversity.com", () => {
      cy.visit("/");
    });

    cy.origin("automationteststore.com", () => {
      cy.visit("/");
    });
  });
});
