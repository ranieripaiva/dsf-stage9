import { Container, Star } from './styles';
import { Tag } from '../Tag';
import { FiStar } from 'react-icons/fi';

export function Note ({data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <div>
                <Star/>
                <span>
                    <FiStar/><FiStar/><FiStar/><FiStar/><FiStar/>
                </span>
                <h4>Nota 4 de 5</h4>
            </div>
            
            {
                data.tags && 
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }
            <p>{data.p}</p>
        </Container>
    )
}