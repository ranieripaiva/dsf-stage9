import { FiArrowLeft, FiUser, FiMail ,FiLock, FiCamera } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from "./styles";
import { Link } from 'react-router-dom';



export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/> <span>Voltar</span>
                </Link>                
            </header>
            <Form>
                <Avatar>
                    <img src='https://github.com/ranieripaiva.png' alt='Foto do Usuário'/>
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input
                            id='avatar'
                            type='file'
                        />
                    </label>
                </Avatar>

                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />  

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                />

                
                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    );
}