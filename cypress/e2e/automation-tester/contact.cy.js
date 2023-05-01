///<reference types="cypress"/>

describe("", () => {
  it("Validate Contact Us Page", () => {
    cy.visit("https://www.automationteststore.com/");
    //cy.get('.info_links_footer > :nth-child(5) >a').click()
    //  cy.xpath("//a[contains(@href, 'contact')]").click().then(function(buttonName){
    //   cy.log("Button name printed: "+buttonName.text())
    //  })
    cy.get(".info_links_footer")
      .contains("Contact Us")
      .click()
      .then(function (getText) {
        cy.log("Print text:" + getText.text());
      });
    cy.get("#ContactUsFrm_first_name").type("Joe");
    cy.get("#ContactUsFrm_first_name").should(
      "have.attr",
      "name",
      "first_name"
    );
    cy.get("#ContactUsFrm_email").type("example@test.com");
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type(
      "This is my new equiry {enter} this another line"
    );
    cy.get("#ContactUsFrm_enquiry").should("have.attr", "name", "enquiry");
    cy.get("button[title='Submit']").should("have.attr", "title", "Submit");
    cy.get("button[title='Submit']").click();

    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
    cy.get(".mb40 > .btn").focus();
  });
});
