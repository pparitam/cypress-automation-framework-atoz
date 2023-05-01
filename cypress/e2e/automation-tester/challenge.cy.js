describe("use alias and invoke", () => {
  it("count number of product class thumbnail", () => {
    cy.visit("https://www.automationteststore.com/");
    //use alias and invoke
    cy.get(".thumbnail").invoke("text").as("product");
    cy.get("@product").its("length").should("be.gt", 15);
  });

  it("add product to  cart", () => {
    cy.visit("https://www.automationteststore.com/");
    //use alias and invoke
    cy.get(".thumbnail").as("product1");
    cy.get("@product1")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");

    // add product to  cart
  });
});
