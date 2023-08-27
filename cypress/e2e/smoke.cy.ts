describe("List", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders movie cards", () => {
    cy.get('[data-testid="movie-card"]').should("be.visible");
    cy.get('[data-testid="movie-card"]').first().click();
    cy.wait(1000);
    cy.url().should("include", "/movies/");
    cy.get(".text-2xl").should("be.visible");

    cy.get('[data-testid="home"]').click();
    cy.wait(1000);
    cy.url().should("include", "/");
  });

  it("filters movies by search text", () => {
    cy.get('[data-testid="search-input"]').type("Avengers");

    cy.get('[data-testid="movie-card"]').should("have.length.above", 0);
    cy.wait(2000);
  });

  it("loads more movies on scroll", () => {
    cy.scrollTo("bottom");

    cy.get('[data-testid="movie-card"]').should("have.length.above", 10);
    cy.wait(2000);
  });
});
