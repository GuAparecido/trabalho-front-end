import { useState } from 'react';
import '../style/Login.css';

const Login = () => {
    const [inputEmail, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const submit = (e) => {
        e.preventDefault();
        console.log("Você clicou em realizar login");
    }

    const onInputEmail = (event) => {
        setEmail(event.target.value);
    };

    const onClickEmail = () => {
        if (!inputEmail) {
            return ("Email inválido");
        } else {
            setEmail("");
        }
    };

    return (
        <div>
            <h1>Bem vindo ao Site</h1>
            <h2>Login</h2>
            <form onSubmit={submit}>
                <label for="email">Email:</label>
                <input type='email' id='email' name='email' placeholder='Digite seu email' value={inputEmail} onChange={onInputEmail} />
                <br />
                <label for="senha">Senha:</label>
                <input type='password' id='senha' name='senha' placeholder='Digite sua senha' />
                <br />
                <button type="submit" onClick={onClickEmail}>Enviar</button>
            </form>
        </div>
    )
}

export default Login

