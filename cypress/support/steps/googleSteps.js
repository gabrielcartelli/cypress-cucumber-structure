/* global Given, Then, When */

import GooglePage from '../pageobjects/GooglePage'
const googlePage = new GooglePage();

Given("que eu acesso o site do google", () => {
    googlePage.acessarSite();

})

When("pesquiso o nome Gabriel", () => {
    googlePage.pesquisarNome();
})

Then("eu vejo os resultados da pesquisa", () => {
    googlePage.verLogotipo();
})
