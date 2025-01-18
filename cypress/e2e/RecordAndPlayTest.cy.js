import 'cypress-file-upload';

describe('Record and Play Suite', () => {

});

/* ==== Test Created with Cypress Studio ==== */
it('Test 1', function() {
  const filePath = 'files/sample.txt'; // Replace with your file's path


  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://adminlte.io/themes/v3/pages/forms/general.html');
  cy.get('#exampleInputEmail1').clear('te');
  cy.get('#exampleInputEmail1').type('test@gmail.com');
  cy.get('#exampleInputPassword1').clear();
  cy.get('#exampleInputPassword1').type('123456');
  cy.get('#exampleInputFile').click();
  cy.get('.form-control-lg').clear('fo');
  cy.get('.form-control-lg').type('form');
  cy.get('[placeholder="Default input"]').clear();
  cy.get('[placeholder="Default input"]').type('default');
  cy.get('.form-control-sm').clear();
  cy.get('.form-control-sm').type('control');

  cy.get('#exampleInputFile').attachFile(filePath);
  /* ==== End Cypress Studio ==== */
});
