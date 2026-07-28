/// <reference types="cypress" />

import commum_page from "../support/pages/commum_page"
import login_page from "../support/pages/login_page";
import { faker } from '@faker-js/faker';


describe('Login' , () => {

    beforeEach('Acessar login de usuário' , () => {
        commum_page.acessarLogin();
    })

    it('Login com sucesso', () => {

        const email = faker.internet.email()

        login_page.preencherEmail(email)
        login_page.preencherSenha(faker.number.int({min: 100000, max : 999999}))
        login_page.login()
        login_page.checkMensagemSucesso(email)

    })

     it('Campo email vazio', () => {
        login_page.preencherSenha(faker.number.int({min: 100000, max : 999999}))
        login_page.login()
        login_page.checkMensagemErroEmail('E-mail inválido.')
    })

     it('Campo email inválido', () => {
        login_page.preencherEmail('Pedro123')
        login_page.preencherSenha(faker.number.int({min: 100000, max : 999999}))
        login_page.login()
        login_page.checkMensagemErroEmail('E-mail inválido.')
    })

     it('Campo senha vazia', () => {
        login_page.preencherEmail(faker.internet.email())
        login_page.login()
        login_page.checkMensagemErroSenha('Senha inválida.')
    })

     it('Campo senha inválida', () => {
        login_page.preencherEmail(faker.internet.email())
        login_page.preencherSenha(faker.number.int({min: 10000, max : 99999}))
        login_page.login()
        login_page.checkMensagemErroSenha('Senha inválida.')

    })

    it('Deve acessar tela de cadastro pelo link Ainda não tem conta?' , () => {
        login_page.linkCadastro()
    })

    //  it('Campo email e senha vazios', () => {
    //     login_page.login()
    //     login_page.checkMensagemErroEmail('E-mail inválido.')
    //     login_page.checkMensagemErroSenha('Senha inválida.')
    // })
})