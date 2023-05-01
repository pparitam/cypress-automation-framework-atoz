///<reference types = "cypress"/>

describe("inspect item using chain of command", () => {
  it("click on first item using item header", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname"
    ).click();
  });

  it.only("click on first item using item header", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(function (itemHeader) {
        console.log("selected item: " + itemHeader.text());
      });
  });

  it("click on first item using item index", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
