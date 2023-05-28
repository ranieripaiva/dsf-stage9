import { Container, Profile} from './styles';
import { Input } from '../Input';

export function Header() {
    return (
        <Container>
            <div id='rocket'>
                <h1>RocketMovies</h1>   
                <Input placeholder="Pesquisar pelo título" />
            </div>
            
            <Profile to="/profile">                    

                <div>                    
                    <strong>Ranieri Paiva</strong>
                    <span>Sair</span>
                   
                </div>
                <img 
                    src="https://github.com/ranieripaiva.png" 
                    alt="Foto Usuário" />  
                  
            </Profile>            
        </Container>
    );
}