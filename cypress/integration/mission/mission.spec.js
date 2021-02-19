context("Mission Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/mission");
  });
  it("Mission page link should work", () => {
    cy.get("[data-cy=spreadsheet]").should("contain", "Christmas");
  });
});
