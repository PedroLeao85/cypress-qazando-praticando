/// <reference types="cypress" />

const elements = {
    buttons: {
        register : '#btnRegister'
    },
    fields: {
        name : '#user',
        email : '#email',
        password : '#password'

    },
    messages: {
        errorlabel : '.errorLabel',
        successTitle : '#swal2-title',
        successSubtitle : '#swal2-html-container'
    }
}

export default {
    saveRegister() {
        cy.get(elements.buttons.register)
            .click()
    },

    fillName(name) {
        cy.get(elements.fields.name)
            .type(name)
    },

    fillEmail(email) {
        cy.get(elements.fields.email)
            .type(email)
    },

    fillPassword(senha) {
        cy.get(elements.fields.password)
            .type(senha)
    },

    checkMessage(mensagem) {
        cy.get(elements.messages.errorlabel)
            .should('be.visible')
            .should('have.text' , mensagem)
    },

    checkRegisterSucess(name) {
        cy.get(elements.messages.successTitle)
            .should('be.visible')
            .should('contain', 'Cadastro realizado!')
        
        cy.get(elements.messages.successSubtitle, { timeout: 3000 })
            .should('be.visible')
            .should('contain', `Bem-vindo ${name}`)    
    }
}