it.only("should not be able to submit successful submission via contact us form  as all field are mandatory", () => {
  //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
  cy.visit("http://www.webdriveruniversity.com");
  cy.get("#contact-us").invoke("removeAttr", "target").click();
  cy.url().should("include", "contactus");
  cy.go("back");
  cy.reload();
  // cy.reload(true)//reload withot cache

  cy.go("forward");
  cy.url().should("include", "contactus");

  cy.go("back");
  cy.get("#login-portal").invoke("removeAttr", "target").click();
  cy.url().should("include", "index");
  cy.go("back");
});
