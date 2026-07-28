/// <reference types="cypress" />

export default {

    acessarLogin () {
        cy.visit('/')
            .get('#top_header')
        
        cy.get('.fa-user')
            .click()    
    },


    acessarCadastroUsuario () {
        cy.visit('/')
            .get('#top_header')
            
        cy.get('.fa-lock')
            .click()    
    }
}