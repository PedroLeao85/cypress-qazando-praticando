/// <reference types="cypress" />

const elements = {

    buttons : {
        login : '#btnLogin'
    },

    links : {
        cadastro : '#createAccount'
    },

    campos : {
        email: '#user',
        senha: '#password'
    },

    mensagens : {
        invalidEmail: '#user + .invalid_input',
        invalidPassword: '#password + .invalid_input',
        successTitle : '#swal2-title',
        successSubtitle : '#swal2-html-container'
    }
}

export default {
    login () {
        cy.get(elements.buttons.login)
            .click()
    },

    preencherEmail (email) {
        cy.get(elements.campos.email)
            .type(email)
    },

    preencherSenha (senha) {
        cy.get(elements.campos.senha)
            .type(senha)
    },


    checkMensagemErroEmail (mensagem) {
        cy.get(elements.mensagens.invalidEmail)
            .should('be.visible')
            .should('have.text' , mensagem)
    },

    checkMensagemErroSenha (mensagem) {
        cy.get(elements.mensagens.invalidPassword)
            .should('be.visible')
            .should('have.text' , mensagem)
    },



    checkMensagemSucesso (name) {
        cy.get(elements.mensagens.successTitle)
            .should('be.visible')
            .should('contain' , 'Login realizado')
        
        cy.get(elements.mensagens.successSubtitle)
            .should('be.visible')
            .should('contain', `Olá, ${name}`)   
    },

    linkCadastro () {
        cy.get(elements.links.cadastro)
            .should('be.visible')
            .click()

        cy.url()
            .should('include', '/register')
            
            
    }


}