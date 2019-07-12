class LoginElements {
    botaoLogin = () => { return '.main-header-login-content .title' }

    botaoRecuperarSenha = () => { return '.forgot' }

    botaoRealizarLogin = () => { return '[type="submit"]' }

    inputEmail = () => { return '#email' }

    inputSenha = () => { return '#password' }

    mensagemErro = () => { return '.description' }
}

export default LoginElements;
