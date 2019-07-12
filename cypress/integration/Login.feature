Feature: Login site CWI

    Background: Acessar o site da CWI
        Given acesso o site CWI

    @testeum
    Scenario: Visualizar opção de recuperar senha esquecida
        When acesso a pagina de login
        Then devo visualizar botao de recuperar senha esquecida

    @testedois
    Scenario Outline: Realizar login com dados inválidos
        Given acesso a pagina de login
        And informo <email> incorreto
        And informo <senha> incorreta
        When clico no botão de realizar login
        Then devo visualizar mensagem de erro

        Examples:
            | email                        | senha      |
            | gabriel.fernando@gmail.com   | Senha94030 |
            | aquino.agostinho@hotmail.com | 999820SgB  |
