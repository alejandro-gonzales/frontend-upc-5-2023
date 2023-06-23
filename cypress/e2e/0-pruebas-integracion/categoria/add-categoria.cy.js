/// <reference types="cypress" />

describe('Agregar una Categoria', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8100')
      })

    it('Abrir la opción de CRUD Categorias', () => {
        cy.get('ion-tab-button').should('be.not.visible');
        cy.get('ion-tab-button').eq(0).click();
    });

    it('Escribir los input', () => {
        cy.wait(1500);
    
        cy.get('ion-item').should('be.visible').should('not.have.length', '0');
      });
})