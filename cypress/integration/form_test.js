describe('Player Form Tests', function(){
    it('can navigate to the site', () => {
        // this is setup for the actual test
        cy.visit('http://localhost:3000')
        // assert that the site we landed at is the correct one
        cy.url().should('include', 'localhost')
      })

 
    it('type name in Name input and check if the text inputted contains the name you provided ', () => {
        cy.get('#nameInput')
        .type('name')
        .should('have.value', 'name')
      })

      it('Get the Email input and type an email address in it', () => {
        cy.get('#emailInput')
        .type('ariana@gmail.com')
        .should('have.value', 'ariana@gmail.com')
     })

     it('Get the Password input and type an email address in it', () => {
        cy.get('#passwordInput')
        .type('password')
     })

     it('check to see if a user can check the desired positions box', () => {
        cy.get(':nth-child(2) > input')
        .check()
        cy.get(':nth-child(3) > input')
        .check()
        cy.get(':nth-child(4) > input')
        .check()
     })

     it('Check to see if a user can submit the form data', () => {
      cy.get('#numberInput').type('1')
      cy.get('button').click()
     })

     it('Check for form validation if an input is left empty', () => {
        cy.get('#nameInput').should('have.value', '')
        cy.get('#emailInput').should('have.value', '')
        cy.get('#passwordInput').should('have.value', '')
        cy.get('button').should('be.disabled')
     })

})

