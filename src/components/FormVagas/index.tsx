import { FormEvent, useState, ButtonHTMLAttributes } from 'react';
import styled, { StyledComponent } from 'styled-components';

const StyledForm: StyledComponent<"form", any, {}, never> = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`;

const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`;

const BotaoPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`;

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas: React.FC<Props> = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <StyledForm onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design" as="input"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisar type="button" as="button">
        Pesquisar
      </BotaoPesquisar>
    </StyledForm>
  );
};

export default FormVagas;
