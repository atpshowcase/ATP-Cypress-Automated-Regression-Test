describe('Form Input Tests with Random Values and Multiple Submissions', () => {
  it('interacts with various input types using random values and submits multiple times', () => {
    cy.visit('https://adminlte.io/themes/v3/pages/forms/general.html');

    function generateRandomString(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }

    function generateRandomEmail() {
      const randomString = generateRandomString(10);
      return `${randomString}@example.com`;
    }

    function clickSubmitMultipleTimes(times) {
      for (let i = 0; i < times; i++) {
        
        const randomEmail = generateRandomEmail();
        cy.get('#exampleInputEmail1')
          .type(randomEmail)
          .should('have.value', randomEmail);
          
        cy.wait(2500); 

        cy.get('.btn-primary').click();
      }
    }

    clickSubmitMultipleTimes(10);
  });
});
