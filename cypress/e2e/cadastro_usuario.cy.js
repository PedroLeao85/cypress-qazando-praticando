/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

import commum_page from "../support/pages/commum_page"
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page';

const email_invalido = require('../fixtures/invalid_data.json')

// const password_invalido = faker.number.int({min: 10000, max : 99999});
// const name = faker.person.fullName();
// const email = faker.internet.email();
// const password = faker.number.int({ min: 100000, max: 999999 });
let user

beforeEach(() => {
    user = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password({ length: 6 }),
        password_invalido: faker.internet.password({ length: 5 })
    }
})

describe('Cadastro de usuário' , () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario();
    } )
    
    it('Campo nome vazio', () => {
        cadastro_usuario_page.fillEmail(user.email)
        cadastro_usuario_page.fillPassword(user.password)
        cadastro_usuario_page.saveRegister();
        cadastro_usuario_page.checkMessage('O campo nome deve ser prenchido')

    })
    it('Campo email vazio', () => {
        cadastro_usuario_page.fillName(user.name)
        cadastro_usuario_page.fillPassword(user.password)
        cadastro_usuario_page.saveRegister();
        cadastro_usuario_page.checkMessage('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo senha vazio', () => {
        cadastro_usuario_page.fillName(user.name)
        cadastro_usuario_page.fillEmail(user.email)
        cadastro_usuario_page.saveRegister();
        cadastro_usuario_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })
    it('Campo e-mail inválido', () => {
        cadastro_usuario_page.fillName(user.name)
        cadastro_usuario_page.fillEmail(email_invalido.email1)
        cadastro_usuario_page.fillPassword(user.password)
        cadastro_usuario_page.saveRegister();
        cadastro_usuario_page.checkMessage('O campo e-mail deve ser prenchido corretamente')

    })

    
    it('Campo senha inválido', () => {
        cadastro_usuario_page.fillName(user.name)
        cadastro_usuario_page.fillPassword(user.password_invalido)
        cadastro_usuario_page.fillEmail(user.email)
        cadastro_usuario_page.saveRegister();
        cadastro_usuario_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', () => {
        cadastro_usuario_page.fillName(user.name)
        cadastro_usuario_page.fillEmail(user.email)
        cadastro_usuario_page.fillPassword(user.password)
        cadastro_usuario_page.saveRegister();
        cadastro_usuario_page.checkRegisterSucess(user.name)
    })
})