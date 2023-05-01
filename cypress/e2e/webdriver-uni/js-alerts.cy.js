///<reference types="cypress"/>

describe("Alert", () => {
  it("validate alert text ", () => {
    //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("Press ok", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();
    cy.on("window:confirm", (str) => {
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  it("Press Cancel", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();
    cy.on("window:confirm", (str) => {
      return false;
    });

    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });

  it("Stub", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      });
  });
});
