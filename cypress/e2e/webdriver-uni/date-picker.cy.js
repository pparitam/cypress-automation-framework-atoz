///<reference types="cypress"/>

describe("Test Datepicker via Webdriver uni  ", () => {
  it("Select Date ", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });

    cy.get("#datepicker").click();

    // var date = new Date();
    // date.setDate(date.getDate()); // get current date

    // cy.log(date.getDate());

    // var date = new Date();
    // date.setDate(date.getDate() + 5); // get

    // cy.log(date.getDate());

    var date = new Date();
    date.setDate(date.getDate() + 300); // get current date

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", { month: "long" });

    var futureDay = date.getDate();

    cy.log("Future year to select: " + futureYear);
    cy.log("Future month to select: " + futureMonth);
    cy.log("Future day to select: " + futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });
    }

    function selectDay() {
      cy.get(".day").contains(futureDay).click();
    }
    selectMonthAndYear();
    selectDay();
  });
});
