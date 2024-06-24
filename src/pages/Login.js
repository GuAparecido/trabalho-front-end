import React, { useState } from 'react';
import '../style/Login.css';
import { useNavigate } from 'react-router-dom';
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import {
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
    Box,
    InputRightAddon,
    Button,

} from '@chakra-ui/react';

const Login = () => {
    const navigate = useNavigate();
    const [inputEmail, setEmail] = useState('');
    const [inputSenha, setSenha] = useState('');
    const [show, setShow] = useState(false)

    const submit = (e) => {
        e.preventDefault();
        if (!inputEmail) {
            alert('Você não preencheu o campo e-mail');
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
            navigate('/cards');
        }
    }

    const onInputEmail = (event) => {
        setEmail(event.target.value);
    };

    const onInputSenha = (event) => {
        setSenha(event.target.value);
    }

    const handleClick = () => setShow(!show)

    return (
        <>
            <div>
                <Box className='boxLogin'>
                    <h1 className='title'>BEM VINDO AO DIGIMON!</h1>
                    <h2 className='subTitle'>LOGIN</h2>
                    <form onSubmit={submit} className='form'>
                        <InputGroup size='sm'>
                            <InputLeftElement pointerEvents='none' m={2} >
                                <EmailIcon color='gray.700' marginLeft={4} marginRight={2} />
                            </InputLeftElement >
                            <Input type='email' id='email' name='email' w={800} placeholder='Digite seu e-mail' bgColor={'transparent'} m={2} borderColor={'blue.400'} value={inputEmail} onChange={onInputEmail} />
                            <InputRightAddon m={2} bgColor={'transparent'} borderColor={'blue.400'} >.com</InputRightAddon>
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em' m={2}>
                                <LockIcon color='gray.700' w={4} m={0} p={0}/>
                            </InputLeftElement>
                            <Input type={show ? 'text' : 'password'} id='password' name='password' w={800} placeholder='Digite sua senha' m={2} bgColor={'transparent'} borderColor={'blue.400'} value={inputSenha} onChange={onInputSenha} />
                            <InputRightElement width='4.5rem' m={2} >
                                <Button h='1.75rem' size='sm' onClick={handleClick} bg={'transparent'}>
                                    {show ? 'Fechar' : 'Ver'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>

                        <button type="submit" className='button'>Enter</button>
                    </form>
                </Box>
            </div >


        </>
    )
}

export default Login

/* 
<label for="email">Email:</label>
                    <input type='email' id='email' name='email' placeholder='Digite seu email' value={inputSenha} onChange={onInputSenha} />
                    {!inputEmail && <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>Campo e-mail não preenchido </AlertTitle>
                    </Alert>
                    }
                    <br />
                    <label for="senha">Senha:</label>
                    <input type='password' id='senha' name='senha' placeholder='Digite sua senha' value={inputSenha} onChange={onInputSenha} />
                    {!inputSenha && <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>Campo senha não preenchido </AlertTitle>
                    </Alert>
                    }
                    <br />
*/

