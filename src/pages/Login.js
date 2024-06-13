import { useState } from 'react';
import '../style/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [inputEmail, setEmail] = useState('');
    const [inputSenha, setSenha] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (!inputEmail) {
            alert('Preencha o e-mail')
            console.log(inputEmail);
        } else if (inputEmail.length < 8) {
            alert('O campo e-mail tem menos de 8 dígitos ')
            console.log(inputEmail);
        }

        if (!inputSenha) {
            alert('Preencha o campo senha');
        } else if (inputSenha.length < 8) {
            alert('Senha deve ter no mínimo 8 caracteres');
        } else {
            console.log("Você realizou login");
            navigate('/profile');
        }
    }

    const onInputEmail = (event) => {
        setEmail(event.target.value);
    };

    const onInputSenha = (event) => {
        setSenha(event.target.value);
    }


    return (
        <div>
            <h1>Bem vindo ao Site</h1>
            <h2>Login</h2>
            <form onSubmit={submit}>
                <label for="email">Email:</label>
                <input type='email' id='email' name='email' placeholder='Digite seu email' value={inputEmail} onChange={onInputEmail} />
                <br />
                <label for="senha">Senha:</label>
                <input type='password' id='senha' name='senha' placeholder='Digite sua senha' value={inputSenha} onChange={onInputSenha} />
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Login

