///<reference types="cypress"/>

describe("Social Media Login Test", () => {
  it("should be able to log in using social media", () => {
    cy.visit("https://www.boohoo.com/login?registrationPage=true");
    cy.get(".b-social_login-facebook").click({ force: true, multiple: true });
    cy.window().then((win) => {
      const socialMediaWindow = win.window.open(
        "https://www.facebook.com/login.php?skip_api_login=1&api_key=2240970789547978&kid_directed_site=0&app_id=2240970789547978&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D2240970789547978%26redirect_uri%3Dhttps%253A%252F%252Fwww.boohoo.com%252Foauth-reentry%26response_type%3Dcode%26scope%3Demail%2Bpublic_profile%26state%3D103169601%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D729eb0ec-9fcd-4c82-a1e5-21eacc24dcd7%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.boohoo.com%2Foauth-reentry%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D103169601%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
      );
      cy.wrap(socialMediaWindow).as("socialMediaWindow");
    });
    cy.get("@socialMediaWindow").then((win) => {
      cy.wrap(win)
        .its("document")
        .then((doc) => {
          doc.querySelector("#email").value = "er.paritap@gmail.com";
          doc.querySelector("#pass").value = "paritap@123";
          doc.querySelector("#loginbutton").click();
        });
    });
    cy.window().then((win) => {
      cy.wrap(win).get("#logged-in-element").should("be.visible");
    });
  });
});
