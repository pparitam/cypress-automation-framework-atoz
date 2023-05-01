///<reference types = "cypress"/>

describe("Verifying variables, cypress, and jquery commands", () => {
  it.skip("Navogating through specific product", () => {
    cy.visit("https://www.automationteststore.com/");
    // //will fail
    // const makeupLink = cy.get("a[href*='product/category&path']").contains('Makeup')
    // const skinCare = cy.get("a[href*='product/category&path']").contains('Skincare')
    // makeupLink.click()
    // skinCare.click()

    // const makeupLink = cy.get("a[href*='product/category&path']").contains('Makeup')
    // makeupLink.click()
    // const skinCare = cy.get("a[href*='product/category&path']").contains('Skincare')
    // skinCare.click()

    //recommended way
    cy.get("a[href*='product/category&path']").contains("Makeup").click();
    cy.get("a[href*='product/category&path']").contains("Skincare").click();
  });

  it("Navogating through specific product", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Makeup").click();

    cy.get("h1 .maintext").then(($el) => {
      const headerText = $el.text();
      cy.log("Printed link value which is:" + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });

  it.only("Navogating through specific product", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    //Uses cypress command and chai
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .contains("First name:");

    //JQuery Approach
    // cy.contains('#ContactUsFrm','Contact Us Form').then(function(text){
    //   const firstNametext = text.find('#field_11').text()
    //   expect(firstNametext).to.contains('First name:')
    // })

    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNametext = text.find("#field_11").text();
      expect(firstNametext).to.contain("First name:");
    });

    //Embedded commands (Closure)
    cy.get("#field_11").then((fnText) => {
      cy.log(fnText.text());
      cy.log(fnText);
    });
  });
});
