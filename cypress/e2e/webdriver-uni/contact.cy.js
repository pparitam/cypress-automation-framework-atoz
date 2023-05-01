///<reference types="cypress"/>
describe("Test contact form via webdriverUni", () => {
  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });
  it.skip("should be able to submit successful submission via contact us form ", () => {
    //cypress code
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.document().should("have.property", "charset", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "Contact-Us/contactus.html");
    //  cy.get('#contact-us').click()
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Robert");
    cy.get('[name="email"]').type("example@gmail.com");
    cy.get("textarea.feedback-input").type(
      "Some random Message{enter}new line"
    );
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
    cy.url().should("include", "contact-form-thank-you.html");
    // console.log("Test has completed")
    cy.log("test data");
  });

  it("should not be able to submit successful submission via contact us form  as all field are mandatory", () => {
    //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.document().should("have.property", "charset", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "Contact-Us/contactus.html");
    //  cy.get('#contact-us').click()
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Robert");
    cy.get('[name="email"]').type("example@gmail.com");
    cy.get("textarea.feedback-input").type(
      "Some random Message{enter}new line"
    );
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
    cy.url().should("include", "contact-form-thank-you.html");
    // console.log("Test has completed")
    cy.log("test data");
  });

  it.only("should not be able to submit successful submission via contact us form  as all field are mandatory", () => {
    //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    // cy.document().should('have.property', 'charset', 'UTF-8')
    // cy.title().should('include','WebDriver | Contact Us')
    // cy.url().should('include', 'Contact-Us/contactus.html')
    //  cy.get('#contact-us').click()
    cy.get('[name="first_name"]').type(data.firstname);
    cy.get('[name="last_name"]').type(data.lastname);
    cy.get('[name="email"]').type(data.email);
    cy.get("textarea.feedback-input").type(data.body);
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
    cy.url().should("include", "contact-form-thank-you.html");
    // console.log("Test has completed")
    cy.log("test data");
  });
});
