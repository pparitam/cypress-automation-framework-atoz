describe("", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("calculate and assert and total age of users", () => {
    var userDetail = [];
    let numb = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetail[index] = $el.text();
      })
      .then(() => {
        var i;
        for (i = 0; i < userDetail.length; i++) {
          // cy.log(userDetail[i])
          //expect(userDetail[i]).to.equal(userDetail[i]);
          if (Number(userDetail[i])) {
            numb += Number(userDetail[i]);
          }
        }
        cy.log(numb);
      });
  });

  it.only("calculate and assert and total age of users", () => {
    var userDetail = [];
    let numb = 0;
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (age) {
            const userAge = age.text();
            expect(userAge).to.equal("80");
          });
      }
    });
  });
});
