# cypress-structure
Estrutra de projeto utilizando Cypress com Cucumber.

Para correto funcionamento instale as depedências executando o seguinte comando na pasta raíz do seu projeto: npm install --save-dev cypress-cucumber-preprocessor

---

O que é Cypress:
Cypress é um framework utilizado para automação de testes end to end. Atualmente, utiliza JavaScript como linguagem de programação e permite iniciar os testes sem muita complicação de configuração de ambiente.
Suas principais vantagens são de possuir uma curva de aprendizado pequena e executar os testes mais rapidamente quando comparado com Selenium. Em contrapartida, possui limitações por utilizar somente o Chrome como browser e não trocar de janela durante os testes.

O que é Cucumber:
Cucumber é uma ferramenta que pode ser utilizada em conjunto com o Cypress e permite a escrita de testes automatizados no formato BDD (Behaviour-Driven Development). É possível utilizar o Cypress sem cucumber, mas não é o foco deste tutorial.
Exemplo de uso da ferramenta Cucumber. Disponível no site da própria ferramenta.

---

Configurando o Ambiente
Não é necessário muito esforço para preparar sua máquina, apenas temos que cumprir quatro etapas:
1. Instalar Node.js: acesse o site oficial, baixe e instale a versão para seu computador.
2. Escolher uma IDE de JavaScript para programar: usaremos o VS Code neste tutorial.
3. Instalar o Cypress com Cucumber: 
I) Crie uma pasta onde ficarão os arquivos do seu projeto. Abra o terminal do windows e acesse essa mesma pasta com o seguinte comando: 
cd /your/project/path
II) Tendo acessado a pasta do projeto, execute o comando de instalação:
npm install --save-dev cypress-cucumber-preprocessor
III) Ainda dentro da pasta do seu projeto, execute o seguinte comando para que o Cypress termine de criar os arquivos locais:
npx cypress open
4. Configurar o Cucumber no Cypress: 
Adicione ao arquivo cypress/plugins/index.js o seguinte script:





---

Entendendo os principais comandos do Cypress
O funcionamento do Cypress é baseado em localizar elementos do site (botões, inputs, textos, imagens, etc.) e interagir com os mesmos. Podemos automatizar todas as ações que executamos manualmente ao utilizar a página web (e mais algumas).
O Cypress possui uma boa documentação com todos os seus comandos. Abaixo vamos ver os principais para iniciar.
GET:
Sintaxe: cy.get('seletor')
Este comando é responsável por selecionar o elemento da tela que queremos interagir. Funcionamento semelhante ao de levar o cursor do mouse em cima do que queremos.



Para entender melhor como capturar seletores de elementos, você pode acessar um bom tutorial neste link.
CLICK:
Sintaxe: .click()
O comando click é utilizado para realizar a ação de clicar em um elemento da página e, para isso, deve ser utilizado em conjunto com o comando GET ou outro comando do tipo. Funcionamento semelhante ao de clicar com o botão esquerdo do mouse no elemento que queremos.



TYPE:
Sintaxe: .type('texto')
Type é utilizado para setar informações em campos. Funcionamento semelhante ao de digitarmos com nosso teclado.



VISIT:
Sintaxe: cy.visit('http://dev-testqa.com')
O comando visit é utilizado para acessar endereços virtuais. Com ele acessamos o site em que iremos realizar os testes.



SHOULD:
Sintaxe: .should('verificação', 'verificado')
Should é um comando utilizado para fazer asserções na página. Este é normalmente o último comando a ser utilizado e serve para validar se o teste passou ou reprovou.





---

Estruturando o projeto
O Cypress pode ser utilizado sem Cucumber com uma estrutura simples explicada na documentação do mesmo. Neste tutorial veremos como estruturar utilizando a ferramenta de escrita de testes em BDD. Para isso, temos que conhecer as principais pastas e arquivos iniciais do projeto:
Estrutura inicial.A pasta 'fixtures' e os arquivos 'commands.js', 'index,js' e package-lock.json' oferecem configurações avançadas que não serão abordadas neste tutorial.
integration: nesta pasta colocamos os nossos arquivos com os cenários de teste escritos no formato BDD. 
plugin/index.js: este arquivo é destinado para configuração de plugins. Utilizamos ele ao configurar o Cucumber.
support: dentro desta pasta colocamos os steps, os scripts e o mapeamento de elementos de nossos testes.
node_modules: aqui ficam os arquivos de funcionamento do Cypress e do Cucumber. Normalmente não precisamos mexer nesta pasta.
cypress.json: neste arquivo podemos realizar configurações globais do nosso projeto. Ex.: criar variáveis globais, definir resolução do navegador, setar um URL padrão, entre outros.

Criando algumas pastas e arquivos adicionais:
Para finalizar a estrutura do projeto, precisamos criar três pastas em cypress/support, pois iremos utilizar o conceito de page object. São elas: elements, pageobjects e steps.
Pastas criadas dentro de cypress/support.steps: nesta pasta colocamos os passos que farão a conexão entre o que escrevemos em BDD e os scripts que fazemos em Cypress.
pageobjects: aqui deixamos os scripts feitos em Cypress. 
A ideia do page objects é a de criarmos um arquivo.js para cada página ou fluxo do site. Dessa forma, mantemos a organização e facilitamos a manutenção do código, pois colocamos no arquivo os comandos que são executados na página/fluxo correspondentes ao nome do arquivo. 
Ex.: HomePage.js, PdpPage.js, Checkout.js.
elements: possui o mesmo conceito do page objects, mas aqui colocamos os elementos da página. Tal organização permite que elementos sejam reutilizados e tenham fácil manutenção.

Além disso, vamos criar um arquivo na pasta raíz do projeto com o nome e formato package.json, conforme a imagem abaixo:
Adicione o seguinte código no arquivo package.json:



Os scripts são facilitadores para executarmos o teste via terminal. Já a configuração de step_definitons permite definir o local do projeto onde estarão os steps de nosso cenário.


---

Hands-on
Com o ambiente configurado e o projeto estruturado, faremos agora um exemplo prático de automatização de testes.
Objetivo: automatizar o processo de testar o login do site da CWI Software.
Passo 1: configurar o arquivo cypress.json. Nele podemos criar variáveis globais e setar configurações para todos os testes.
ViewportWidth e viewportHeight permitem configurar a resolução do navegador em que nossos testes serão executados.
Define um tipo de timeout para 10 segundos.
BaseUrl é onde configuramos a url padrão de nossos testes.
Local onde está o arquivo cypress.json.

Várias configurações podem ser feitas 
Passo 2: criar um arquivo com o cenário de teste escrito em BDD. Ele deve ficar dentro de cypress/integration e ter a extensão .feature.
Nome da suíte de testes que pode possuir vários cenários.
Nome do cenário de teste.
Given é o equivalente ao "Dado que" do BDD.
When é o equivalente ao "Quando" do BDD.
Then é o equivalente ao "Então" do BDD.
Arquivo com nome da suíte e formato .feature dentro de cypress/integration.

Neste arquivo podemos criar vários cenários de testes. Além disso, podemos ter quantos arquivos .features com cenários forem necessários. Normalmente separamos por fluxos ou testes.
Passo 3: criar um arquivo com os passos do meu teste. Ele deve ter formato .js e ficar dentro de cypress/support/steps. Normalmente, criamos um arquivo de steps para cada arquivo de feature que temos e utilizamos o mesmo nome nos dois, apenas acrescentando "Steps" ao nome.
Configuração para importar globalmente os passos que escrevemos nos arquivos .feature.
Comando para importar o arquivo LoginPage.js que criaremos no próximo passo.
Cria um constante para que utilizemos as funções que serão criadas no arquivo LoginPage.js.
Função que associa o nosso passo escrito em BDD com a função que deve executar. 
Função com nossos comandos que será criada dentro do arquivo LoginPage.js.
Passo que escrevemos em BDD no arquivo Login.feature. Deve ser exatamente igual ao que foi digitado.
Arquivo criado no formato .js dentro da pasta cypress/support/steps.

Passo 4: criar um arquivo com as funções e comandos que executaremos. Deve ter formato .js e ficar dentro de cypress/support/pageobjects.
Comando especial para VS Code. Exibe sugestões de complemento de comandos do Cypress enquanto digitamos.
Comando para importar o arquivo LoginElements.js que criaremos no próximo passo.
Cria um constante para que utilizemos as funções que serão criadas no arquivo LoginElements.js.
Cria uma constante que recebe a URL colocada no arquivo cypress.json.
Comando Cypress que permite trazer valores configurados no arquivo cypress.json.
Função que foi chamada no arquivo anterior e executa nossos comandos.
Comando Cypress que acessa um site.
URL que será acessada pelo comando visit.
Comando Cypress que seleciona o elemento da página que será utilizado.
Função que retorna o seletor do elemento da página. Será criada no próximo passo.
Comando Cypress que realiza a ação de clicar em um elemento.
Comando Cypress que realiza uma verificação. Neste caso utilizamos a opção 'contain' que analisa se o elemento contém um texto.
Texto que deve estar contido no elemento analisado.
Arquivo criado no formato .js dentro da pasta cypress/support/pageobjects.
Comando para exportar a LoginPage e possibilitar sua importação no arquivo LoginSteps.js.

Passo 5: criar o arquivo no qual faremos a listagem dos elementos da página. Deve ter formato .js e ficar dentro de cypress/support/elements.
Função que retorna para a LoginPage.js o seletor do elemento que será utilizado.
Seletor do elemento do botão de recuperar senha. Nesse caso utilizamos a class forgot. Para entender melhor como pegar os seletores, volte para a explicação do comando GET.
Comando para exportar a LoginElements.js e possibilitar sua importação no arquivo LoginPage.js.
Arquivo criado no formato .js dentro da pasta cypress/support/elements.

Passo 6: executar o teste. Execute pelo terminal do próprio VS Code o comando abaixo que configuramos no arquivo package.json:
npm run test:chrome
Você também pode executar o comando completo:
npx cypress run --browser chrome --no-exit
Feito isso, o chrome será aberto e poderemos acompanhar a execução do teste. Teremos o seguinte resultado:


Exibe a quantidade de testes executados com sucesso.
Exibe a quantidade de testes que falharam.
Executa novamente todos os testes.
Abre o seletor de elementos do Cypress.
Resumo dos passos executados em nosso teste.
Botão de login que clicamos ao acessar o site.
Botão de recuperar senha que verificamos se continha o texto "Esqueceu sua senha?".

Outras configurações podem ser feitas a partir do comando digitado para executar o teste. Acessa a documentação para visualizar as opções.


---

Conclusão
O que foi exposto acima é o básico para iniciar os testes automatizados com Cypress. Entretanto, muitas outras funcionalidades são possíveis, como, por exemplo, o uso de tags, a criação de cenários com exemplos e o teste de APIs.
Cypress continua sendo desenvolvido e futuramente possibilitará testes em outros navegadores além do Chrome. Aprofunde seus estudos e aprimore cada vez mais os seus testes. 


---

Links Úteis
Site oficial Cypress
Documentação Cypress
Site oficial do Cucumber 
Repositório do Cucumber para Cypress
Tutorial de seletores CSS