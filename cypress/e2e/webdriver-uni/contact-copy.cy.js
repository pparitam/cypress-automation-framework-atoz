///<reference types="cypress"/>
describe("Test contact form via webdriverUni", () => {
  before(function () {
    cy.fixture("userDetails").as("user");
  });

  it.only("should not be able to submit successful submission via contact us form  as all field are mandatory", () => {
    //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    // cy.document().should('have.property', 'charset', 'UTF-8')
    // cy.title().should('include','WebDriver | Contact Us')
    // cy.url().should('include', 'Contact-Us/contactus.html')
    //  cy.get('#contact-us').click()
    cy.get("@user").then((user) => {
      cy.get('[name="first_name"]').type(user.first_name);
      cy.get('[name="last_name"]').type(user.lastname);
      cy.get('[name="email"]').type(user.email);
      cy.get("textarea.feedback-input").type(user.body);
    });

    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
    cy.url().should("include", "contact-form-thank-you.html");
    // console.log("Test has completed")
    cy.log("test data");
  });
});
