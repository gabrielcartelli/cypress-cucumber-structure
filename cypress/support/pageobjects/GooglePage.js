/// <reference types="Cypress" />

import LogoTipoGoogle from '../elements/LogoTipoGoogle'
const logoTipoGoogle = new LogoTipoGoogle

class GooglePage {
    acessarSite(){
        cy.visit('https://www.google.com.br/')
    }

    pesquisarNome(){
        cy.get(logoTipoGoogle.barraPesquisa()).type("gabriel").type('{enter}')
    }
    
    verLogotipo(){
        cy.get(logoTipoGoogle.resultados()).click()
    }
}
export default GooglePage;
