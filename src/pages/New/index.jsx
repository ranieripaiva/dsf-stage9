import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from './styles';

export function New() {
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        
                        <Link to="/">
                            <FiArrowLeft/>
                            <span>Voltar</span>
                        </Link>
                        <h1>Novo filme</h1>

                    </header>

                    <div className="inputs">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>

                    <Textarea placeholder="Observações"/>


                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Novo narcador"/>
                        </div>
                    </Section>
                    
                    <div className="buttons">
                        <Button title="Excluir filme" loading="Excluir"/>
                        <Button title="Salvar alterações"/>
                    </div>
                </Form>
            </main>
        </Container>
    );
}