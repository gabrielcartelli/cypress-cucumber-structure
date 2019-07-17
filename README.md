# cypress-structure
Estrutra de projeto utilizando Cypress com Cucumber.

Para configurar o Ambiente:
    1. Instalar Node.js.
    2. Escolher uma IDE de JavaScript para programar.
    3. Instalar o Cypress com Cucumber executando o seguinte comando na raíz da pasta do seu projeto: npm install --save-dev cypress cypress-cucumber-preprocessor

Para iniciar os testes, execute um dos seguintes comandos no terminal do VS Code:
    1. Para executar os testes via terminal: npx cypress run
    2. Para executar os testes via browser: npx cypress run --browser chrome --no-exit
    3. Para executar os testes via script salvo em package.json: npm run test:chrome    

Tutorial completo de utilização do Cypress com Cucumber: https://medium.com/@cartelli.gf/testes-automatizados-com-cypress-e-cucumber-d78b211da766